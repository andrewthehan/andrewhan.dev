<script>
  import GameButton from "$lib/game/components/GameButton.svelte";
  import GameText from "$lib/game/components/GameText.svelte";
  import { GameKey, getNumber, setNumber } from "$lib/game/storage";
  import GoblinHeadIcon from "virtual:icons/game-icons/goblin-head";
  import HeartsIcon from "virtual:icons/game-icons/hearts";
  import DeadHeadIcon from "virtual:icons/game-icons/dead-head";
  import { goto } from "$app/navigation";

  let count = $state(getNumber(GameKey.ROCK_COUNT, 0));
  let health = $state(getNumber(GameKey.GOBLIN_HEALTH, 3));

  function throwRock() {
    const currentHealth = getNumber(GameKey.GOBLIN_HEALTH, 3);
    if (currentHealth === 0) {
      alert("The goblin is already dead!");
      return;
    }

    const currentCount = getNumber(GameKey.ROCK_COUNT, 0);
    if (currentCount > 0) {
      count = currentCount - 1;
      setNumber(GameKey.ROCK_COUNT, currentCount - 1);

      health = currentHealth - 1;
      setNumber(GameKey.GOBLIN_HEALTH, currentHealth - 1);
    }
  }
</script>

<GameText element="p">
  {count === 0 ? "Uh oh!" : "Nice!"} You have {count === 0
    ? "no rocks"
    : count == 1
      ? "a rock"
      : `${count} rocks`}.
</GameText>
<div>
  {#each Array.from({ length: health }, (_, i) => i) as _}
    <HeartsIcon font-size={24} color="red" />
  {/each}
</div>
{#if health === 0}
  <GameText element="p">You defeated the goblin!</GameText>
  <GameButton onClick={() => goto("/402")}>
    <DeadHeadIcon font-size={128} color="darkolivegreen" />
  </GameButton>
{:else}
  <GameButton onClick={throwRock}>
    <GoblinHeadIcon font-size={128} color="darkolivegreen" />
  </GameButton>
{/if}

<style>
</style>
