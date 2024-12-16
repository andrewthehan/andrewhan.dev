<script lang="ts">
  import { Achievement, addAchievement } from "$lib/game/achievements";
  import GameButton from "$lib/game/components/GameButton.svelte";
  import GameText from "$lib/game/components/GameText.svelte";
  import { GameKey, getJson, setJson } from "$lib/game/storage";
  import CardboardBoxIcon from "virtual:icons/game-icons/cardboard-box";
  import CardboardBoxClosedIcon from "virtual:icons/game-icons/cardboard-box-closed";
  import KeyIcon from "virtual:icons/game-icons/key";

  let hasKey = $state(getJson(GameKey.CHEST_KEY, null) != null);

  function getKey() {
    if (hasKey) {
      addAchievement(Achievement.HOARDER);
      alert("No need to take the empty box with you.");
      return;
    }
    setJson(GameKey.CHEST_KEY, "/treasure");
    hasKey = true;
  }
</script>

<GameText element="p">Seems like you're pretty invested.</GameText>
<GameText element="p">Here, take this box.</GameText>
{#if hasKey}
  <GameButton onClick={getKey} disabled>
    <CardboardBoxIcon font-size={100} color="burlywood" />
  </GameButton>
{:else}
  <GameButton onClick={getKey} disabled>
    <CardboardBoxClosedIcon font-size={100} color="burlywood" />
  </GameButton>
{/if}
{#if hasKey}
  <GameText element="p">You found a key! Now where to use this...</GameText>
  <KeyIcon font-size={40} color="goldenrod" />
{/if}
