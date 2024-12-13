<script lang="ts">
  import { Achievement, getAchievementData, getAchievements } from "$lib/game/achievements";
  import GameText from "$lib/game/components/GameText.svelte";
  import Icon from "@iconify/svelte";

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
        {@const { name, description, icon: Icon } = getAchievementData(achievement)}
        <div class="achievement">
          <div class="achievement-icon">
            <Icon font-size={64} color={"var(--foreground-color)"} />
          </div>
          <div class="achievement-text">
            <GameText --font-size="32px">{name}</GameText>
            <GameText --font-size="18px">{description}</GameText>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>

<style>
  .achievements {
    display: flex;
    flex-direction: column;
  }

  .achievement {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    padding: 8px;
    border-radius: 8px;
    background: var(--background-color);
  }

  .achievement-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: var(--primary-color);
  }

  .achievement-text {
    display: flex;
    flex-direction: column;
  }
</style>
