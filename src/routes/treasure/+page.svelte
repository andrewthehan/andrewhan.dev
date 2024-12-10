<script lang="ts">
  import { Achievement, addAchievement } from "$lib/game/achievements";
  import GameText from "$lib/game/components/GameText.svelte";
  import OpenTreasureChestIcon from "virtual:icons/game-icons/open-treasure-chest";

  addAchievement(Achievement.TREASURE_HUNTER);
</script>

<OpenTreasureChestIcon font-size={100} color="goldenrod" />

<GameText>You found treasure!</GameText>

<GameText>It's a command spell. It says:</GameText>

<pre>hocuspocus()</pre>

<GameText>Wonder what it does?</GameText>
