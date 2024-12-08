<script lang="ts">
  import AtSign from "lucide-svelte/icons/at-sign";
  import Briefcase from "lucide-svelte/icons/briefcase";
  import Brush from "lucide-svelte/icons/brush";
  import CheckCircle from "lucide-svelte/icons/check-circle";
  import Code from "lucide-svelte/icons/code";
  import Gamepad from "lucide-svelte/icons/gamepad";
  import ListMusic from "lucide-svelte/icons/list-music";
  import Piano from "lucide-svelte/icons/piano";
  import Twitch from "lucide-svelte/icons/twitch";
  import "../app.css";
  import Link from "./Link.svelte";

  const socials = [
    {
      name: "Email",
      description: "me@andrewhan.dev",
      link: "mailto:me@andrewhan.dev",
      icon: AtSign,
    },
    {
      name: "LinkedIn",
      description: "andrewthehan",
      link: "https://www.linkedin.com/in/andrewthehan/",
      icon: Briefcase,
    },
    {
      name: "GitHub",
      description: "andrewthehan",
      link: "https://github.com/andrewthehan",
      icon: Code,
    },
    {
      name: "Twitch",
      description: "hooroorook",
      link: "https://www.twitch.tv/hooroorook",
      icon: Twitch,
    },
    {
      name: "Steam",
      description: ". . .",
      alertMessage: "Ask me directly.",
      icon: Gamepad,
    },
  ];

  const projects = [
    {
      name: "Check",
      description: "A minimal checklist app",
      link: "https://check.andrewhan.dev/",
      icon: CheckCircle,
    },
    {
      name: "Piano",
      description: "A MIDI pianola",
      link: "https://piano.andrewhan.dev/",
      icon: Piano,
    },
    {
      name: "Butterfly",
      description: "An artwork utilizing regular polygons",
      link: "https://github.com/andrewthehan/butterfly",
      icon: Brush,
    },
    {
      name: "Transcriptions",
      description: "Some piano transcriptions",
      link: "https://transcriptions.andrewhan.dev/",
      icon: ListMusic,
    },
  ];
</script>

<svelte:head>
  <title>Andrew Han</title>
  <meta name="description" content="Andrew Han's personal site" />
</svelte:head>

<div class="app">
  <header>
    <img
      class="logo"
      src="https://raw.githubusercontent.com/andrewthehan/butterfly/master/butterfly.png"
      alt="Andrew Han"
      width="32"
      height="32"
    />
    <h1 class="name">Andrew Han</h1>
  </header>

  <section>
    <p>I am a software engineer with a passion for code design, music, and games.</p>

    <div class="buttons">
      <a href="https://ko-fi.com/andrewthehan" target="_blank" rel="noopener noreferrer">
        <img
          height="36"
          src="https://storage.ko-fi.com/cdn/widget/kofi_new_button.png"
          alt="Tip me at ko-fi.com"
        />
      </a>
    </div>
  </section>

  <section>
    <h2>Socials</h2>
    {#each socials as { name, description, link, alertMessage, icon: Icon }, i}
      <Link {name} {description} {link} {alertMessage}>
        {#snippet icon()}
          <Icon />
        {/snippet}
      </Link>
      {#if i < socials.length - 1}
        <hr />
      {/if}
    {/each}
  </section>

  <section>
    <h2>Projects</h2>
    {#each projects as { name, description, link, icon: Icon }, i}
      <Link {name} {description} {link}>
        {#snippet icon()}
          <Icon />
        {/snippet}
      </Link>
      {#if i < projects.length - 1}
        <hr />
      {/if}
    {/each}
  </section>
</div>

<style>
  :root {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .app {
    display: flex;
    flex-flow: column;

    width: 768px;
    max-width: 90vw;
  }

  header {
    display: flex;
    align-items: center;

    margin: 12px 0;
  }

  .logo {
    border-radius: 50%;
  }

  .name {
    margin: 0 1rem;
  }

  section {
    margin: 6px 0;
  }

  .buttons {
    display: flex;
    flex-flow: row;
  }
</style>
