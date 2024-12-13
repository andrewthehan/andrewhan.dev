<script lang="ts">
  import { Achievement, addAchievement } from "$lib/game/achievements";
  import GameText from "$lib/game/components/GameText.svelte";
  import OpenTreasureChestIcon from "virtual:icons/game-icons/open-treasure-chest";

  addAchievement(Achievement.TREASURE_HUNTER);
</script>

<OpenTreasureChestIcon font-size={100} color="goldenrod" />

<GameText element="p">You found some sort of scroll!</GameText>

<div class="spell-book">
  <div>✨ Spells ✨</div>
  <div>
    <div>abracadabra()</div>
    <div>alakazam()</div>
    <div>hocuspocus()</div>
  </div>
  <div>- ROT13</div>
</div>

<GameText element="p">Seems to be a list of spells. Now, how to cast these..?</GameText>

<style>
  .spell-book {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 8px;

    outline: 1px solid var(--foreground-color);
    padding: 16px;
    font-family: monospace;
  }
</style>
