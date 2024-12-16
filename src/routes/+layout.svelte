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
    content="https://raw.githubusercontent.com/andrewthehan/butterfly/master/butterfly.png"
  />
</svelte:head>

<SvelteToast />
<div class="app">
  <header>
    <a href="/" class="home">
      <img
        class="logo"
        src="https://raw.githubusercontent.com/andrewthehan/butterfly/master/butterfly.png"
        alt="Andrew Han"
        width="32"
        height="32"
      />
      <h1 class="name">Andrew Han</h1>
    </a>
  </header>

  <main>
    <div class="main-content">
      {@render children()}
      <div class="bottom-gap"></div>
    </div>
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100vh;
  }

  header {
    display: flex;
    align-items: center;

    margin-top: 6px;
    padding: 12px 0;
    width: 768px;
    max-width: 90vw;
  }

  .home {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .logo {
    border-radius: 50%;
  }

  .name {
    margin: 0 1rem;
  }

  main {
    width: 100%;
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 768px;
    max-width: 90vw;

    height: 100%;
  }

  .bottom-gap {
    min-height: 24px;
  }
</style>
