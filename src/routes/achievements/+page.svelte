<script lang="ts">
  import { getAchievements } from "$lib/game/achievements";

  const achievements = getAchievements();
</script>

<section>
  <h2>Achievements</h2>
  {#if achievements.length === 0}
    <p>No achievements yet.</p>
  {:else}
    <ul>
      {#each achievements as achievement}
        <li>{achievement}</li>
      {/each}
    </ul>
  {/if}
</section>
