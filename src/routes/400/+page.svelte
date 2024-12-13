<script>
  import { goto } from "$app/navigation";
  import { Achievement, addAchievement } from "$lib/game/achievements";
  import GameButton from "$lib/game/components/GameButton.svelte";
  import GameText from "$lib/game/components/GameText.svelte";
  import { GameKey, getNumber, setNumber } from "$lib/game/storage";
  import RockIcon from "virtual:icons/game-icons/rock";

  function getRock() {
    const count = getNumber(GameKey.ROCK_COUNT, 0);
    const updatedCount = count + 1;

    setNumber(GameKey.ROCK_COUNT, updatedCount);
    if (updatedCount >= 10) {
      addAchievement(Achievement.ROCK_COLLECTOR);
    }
  }
</script>

<GameText element="p">Hello there! Thanks for visiting my site.</GameText>
<GameText element="p">Try looking around. Maybe you'll find something interesting.</GameText>
<div class="hidden">
  <GameButton
    onClick={() => {
      getRock();
      goto("/401");
    }}
  >
    <RockIcon font-size={64} color="slategray" />
  </GameButton>
</div>

<style>
  .hidden {
    display: block;
    position: absolute;
    bottom: 64px;
    right: 64px;
    opacity: 0;
    transition: opacity 1s;
  }

  .hidden:hover {
    opacity: 1;
  }
</style>
