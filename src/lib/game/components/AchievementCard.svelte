<script lang="ts">
  import { getAchievementData, type Achievement } from "../achievements";
  import GameText from "./GameText.svelte";

  const { achievement, locked = false } = $props<{ achievement: Achievement; locked?: boolean }>();
  const { name, description, icon: Icon } = $derived(getAchievementData(achievement));
</script>

<div class="achievement">
  <div class="achievement-icon" style:background={locked ? "gray" : "var(--primary-color)"}>
    <Icon font-size={64} color={"var(--foreground-color)"} />
  </div>
  <div class="achievement-text">
    <GameText --font-size="32px">{locked ? "???" : name}</GameText>
    <GameText --font-size="18px">{locked ? "???" : description}</GameText>
  </div>
</div>

<style>
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
  }

  .achievement-text {
    display: flex;
    flex-direction: column;
  }
</style>
