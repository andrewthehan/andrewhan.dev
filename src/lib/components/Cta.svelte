<script lang="ts">
  import type { Snippet } from "svelte";

  const {
    children,
    cost,
    action,
    onclick,
  }: { children: Snippet<[]>; cost: number; action: string; onclick: () => void } = $props();
</script>

<div class="container">
  {@render children()}
  <div class="action">
    <div class="cost">
      {#if cost > 0}
        {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cost)}
      {:else}
        Free
      {/if}
    </div>
    <button class="button" {onclick}>
      {action}
    </button>
  </div>
</div>

<style>
  .container {
    position: relative;
  }

  .action {
    position: absolute;
    right: 16px;
    bottom: -17px;
    background: black;
    padding: 3px;
    border-radius: 2px;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  .cost {
    padding: 0 12px;
    font-size: 13px;
  }

  .button {
    border-radius: 2px;
    border: none;
    padding: 0 15px;
    font-size: 15px;
    line-height: 30px;
    padding: 0 15px;
    border-radius: 2x;
    cursor: pointer;
    color: var(--secondary-text-color);
    text-decoration: none;
    background: var(--secondary-tinted-gradient);
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
  }

  .button:hover {
    background: var(--secondary-tinted-color);
    color: var(--bright-font-color);
  }
</style>
