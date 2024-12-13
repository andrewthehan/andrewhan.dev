<script lang="ts">
  import { Achievement, getAchievements } from "$lib/game/achievements";
  import AchievementCard from "$lib/game/components/AchievementCard.svelte";
  import GameText from "$lib/game/components/GameText.svelte";

  const achievements = getAchievements();
</script>

<section>
  <GameText --font-size="40px"
    >Achievements ({achievements.length} / {Object.values(Achievement).length})</GameText
  >
  {#if achievements.length === 0}
    <GameText element="p">No achievements yet.</GameText>
  {:else}
    <div class="achievements">
      {#each achievements as achievement (achievement)}
        <AchievementCard {achievement} />
      {/each}
    </div>
  {/if}
</section>

<style>
  .achievements {
    display: flex;
    flex-direction: column;
  }
</style>
