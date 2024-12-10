<script lang="ts">
  import type { Snippet } from "svelte";

  export let children: Snippet<[]>;
  export let fontSize: number = 36;
</script>

<div class="game-text" style:font-size={`${fontSize}px`}>
  {@render children()}
</div>

<style>
  .game-text {
    margin: 1.1rem 0;
    font-family: var(--game-font);
  }
</style>
