<script lang="ts">
  import GameButton from "$lib/game/components/GameButton.svelte";
  import GameText from "$lib/game/components/GameText.svelte";
  import CardboardBoxIcon from "virtual:icons/game-icons/cardboard-box";
  import CardboardBoxClosedIcon from "virtual:icons/game-icons/cardboard-box-closed";
  import KeyIcon from "virtual:icons/game-icons/key";

  let hasKey = $state(localStorage.getItem("key") != null);

  function getKey() {
    if (hasKey) {
      alert("The box is empty. No need to keep looking.");
      return;
    }
    localStorage.setItem("key", "/treasure");
    hasKey = true;
  }
</script>

<GameText>Wow! That was a tricky one.</GameText>
<GameText>Seems like you're pretty invested.</GameText>
<GameText>Here, take this box.</GameText>
<div>
  {#if hasKey}
    <GameButton onClick={getKey} disabled>
      <CardboardBoxIcon font-size={100} color="burlywood" />
    </GameButton>
  {:else}
    <GameButton onClick={getKey} disabled>
      <CardboardBoxClosedIcon font-size={100} color="burlywood" />
    </GameButton>
  {/if}
</div>
{#if hasKey}
  <GameText>You found a key! Now where to use this...</GameText>
  <KeyIcon font-size={40} color="goldenrod" />
{/if}
