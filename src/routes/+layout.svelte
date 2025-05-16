<script lang="ts">
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { Achievement, addAchievement } from "$lib/game/achievements";
  import SequenceListener from "$lib/game/components/SequenceListener.svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import type { Snippet } from "svelte";
  import "../app.css";

  const { children }: { children: Snippet } = $props();

  const DEFAULT_HUE = 202;
  const parseHue = browser
    ? parseInt(getComputedStyle(document.documentElement).getPropertyValue("--primary-hue"))
    : DEFAULT_HUE;
  let hue = $state(isNaN(parseHue) ? DEFAULT_HUE : parseHue);

  let animationFrameId = $state<ReturnType<typeof requestAnimationFrame> | null>(null);
  let lastTimestamp = $state(0);
  function cycle(timestamp: number) {
    const deltaTime = timestamp - lastTimestamp;
    hue = (hue + 0.1 * deltaTime) % 360;
    document.documentElement.style.setProperty("--primary-hue", `${hue}`);

    lastTimestamp = timestamp;
    animationFrameId = requestAnimationFrame(cycle);
  }

  if (browser) {
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
  }

  console.log("👀 You can look around but visiting the Sources tab may spoil the fun.");
</script>

<svelte:head>
  <meta property="og:url" content="https://andrewhan.dev/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="andrewhan.dev" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="andrewhan.dev" />
  <meta property="twitter:url" content="https://andrewhan.dev" />
</svelte:head>

<SvelteToast />

<SequenceListener
  sequence={[
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]}
  onTrigger={() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    } else {
      lastTimestamp = performance.now();
      animationFrameId = requestAnimationFrame(cycle);
    }
  }}
/>

<main>
  <div class="content">
    {@render children()}
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden auto;
  }

  .content {
    width: 940px;
    max-width: calc(100vw - 4%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
