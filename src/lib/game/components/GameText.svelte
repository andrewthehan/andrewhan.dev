<script lang="ts">
  import type { Snippet } from "svelte";

  export let children: Snippet<[]>;
  export let element: string = "div";
</script>

<svelte:element this={element} class="game-text">
  {@render children()}
</svelte:element>

<style>
  .game-text {
    font-family: var(--game-font);
    font-size: var(--font-size, 24px);
  }
</style>
