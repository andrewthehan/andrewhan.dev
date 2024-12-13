<script lang="ts">
  import { Achievement, addAchievement } from "$lib/game/achievements";
  import GameText from "$lib/game/components/GameText.svelte";
  import MimicChestIcon from "virtual:icons/game-icons/mimic-chest";

  addAchievement(Achievement.DIED_TO_A_MIMIC);
</script>

<MimicChestIcon font-size={100} color="goldenrod" />

<GameText element="p">It was a mimic! You died.</GameText>
