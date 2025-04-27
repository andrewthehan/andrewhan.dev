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
  <div class="achievements">
    {#each Object.values(Achievement) as achievement (achievement)}
      {#if achievements.includes(achievement)}
        <AchievementCard {achievement} />
      {:else}
        <AchievementCard {achievement} locked />
      {/if}
    {/each}
  </div>
</section>

<style>
  section {
    width: 100%;
  }

  .achievements {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>
