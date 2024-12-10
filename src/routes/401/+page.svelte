<script>
  import GameText from "$lib/game/components/GameText.svelte";
</script>

<GameText>Nice! That was easy.</GameText>
<a href="/402" class="hidden"><GameText fontSize={16}>Something interesting</GameText></a>

<style>
  .hidden {
    position: absolute;
    bottom: 64px;
    left: 64px;
    color: transparent;
    text-decoration: none;
  }

  .hidden:hover {
    background: var(--primary-color);
    color: var(--foreground-color);
  }
</style>
