<script lang="ts">
  import { Achievement, addAchievement } from "$lib/game/achievements";
  import GameText from "$lib/game/components/GameText.svelte";
  import image from "./cow.jpg";

  addAchievement(Achievement.DABBED_BEEEEF);
</script>

<GameText element="p">You found a cow!</GameText>

<img src={image} alt="dabbed beeeef" width={500} style:max-width="95%" style:border-radius="16px" />
<GameText --font-size="8px">AI generated</GameText>
