<script>
  import GameText from "$lib/game/components/GameText.svelte";
</script>

<GameText>Hello there! Thanks for visiting my site.</GameText>
<GameText>Try looking around. Maybe you'll find something interesting.</GameText>
<a href="/401" class="hidden"><GameText fontSize={16}>Something interesting</GameText></a>

<style>
  .hidden {
    position: absolute;
    bottom: 64px;
    right: 64px;
    color: transparent;
    text-decoration: none;
  }

  .hidden:hover {
    background: var(--primary-color);
    color: var(--foreground-color);
  }
</style>
