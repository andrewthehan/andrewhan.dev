<script lang="ts">
  import { Achievement, addAchievement } from "$lib/game/achievements";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import type { Snippet } from "svelte";
  import "../app.css";
  import { goto } from "$app/navigation";

  export let children: Snippet;

  (window as any).abracadabra = () => {
    addAchievement(Achievement.MAGICIAN);
    alert(`✨ Send an email to me@andrewhan.dev if you're having fun! ✨`);
  };

  (window as any).alakazam = () => {
    addAchievement(Achievement.MAGICIAN);
    alert(`✨ That's a Pokémon. ✨`);
  };

  (window as any).hocuspocus = () => {
    addAchievement(Achievement.MAGICIAN);
    goto("/squares");
  };

  console.log("👀 You can look around but visiting the Sources tab may spoil the fun.");
</script>

<svelte:head>
  <title>Andrew Han</title>
  <meta name="description" content="Andrew Han's personal site" />

  <meta property="og:url" content="https://andrewhan.dev/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Andrew Han" />
  <meta property="og:description" content="Andrew Han's personal site" />
  <meta
    property="og:image"
    content="https://raw.githubusercontent.com/andrewthehan/butterfly/master/static/butterfly-light.png"
  />
</svelte:head>

<SvelteToast />
<main>
  <div class="background"></div>
  <div class="content">
    {@render children()}
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    width: 940px;
    max-width: calc(100vw - 4%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .background {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: opacity(0.1) brightness(0.5) grayscale(0.8);
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://raw.githubusercontent.com/andrewthehan/butterfly/master/static/butterfly-light.png");
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  }
</style>
