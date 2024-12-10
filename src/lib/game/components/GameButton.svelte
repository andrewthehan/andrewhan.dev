<script lang="ts">
  import type { Snippet } from "svelte";

  export let children: Snippet<[]>;
  export let onClick: () => void;
  export let disabled: boolean = false;
</script>

<button
  class="game-button"
  on:click={onClick}
  {disabled}
  style:cursor={disabled ? "not-allowed" : "pointer"}
>
  {@render children()}
</button>

<style>
  .game-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.5rem;
    border-radius: 0.5rem;
    background: var(--background-color);
  }

  .game-button:hover {
    filter: brightness(1.2);
  }
</style>
