<script lang="ts">
  import Link from "$lib/Link.svelte";
  import AtSignIcon from "virtual:icons/lucide/at-sign";
  import BrushIcon from "virtual:icons/lucide/brush";
  import CircleCheckBigIcon from "virtual:icons/lucide/circle-check-big";
  import ListMusicIcon from "virtual:icons/lucide/list-music";
  import PianoIcon from "virtual:icons/lucide/piano";
  import DiscordIcon from "virtual:icons/simple-icons/discord";
  import GithubIcon from "virtual:icons/simple-icons/github";
  import LinkedinIcon from "virtual:icons/simple-icons/linkedin";
  import SteamIcon from "virtual:icons/simple-icons/steam";
  import TwitchIcon from "virtual:icons/simple-icons/twitch";
  import "../app.css";

  const socials = [
    {
      name: "Email",
      description: "me@andrewhan.dev",
      link: "mailto:me@andrewhan.dev",
      icon: AtSignIcon,
    },
    {
      name: "LinkedIn",
      description: "andrewthehan",
      link: "https://www.linkedin.com/in/andrewthehan/",
      icon: LinkedinIcon,
    },
    {
      name: "GitHub",
      description: "andrewthehan",
      link: "https://github.com/andrewthehan",
      icon: GithubIcon,
    },
    {
      name: "Steam",
      description: "hooroorook",
      link: "https://steamcommunity.com/id/hooroorook/",
      icon: SteamIcon,
    },
    {
      name: "Twitch",
      description: "hooroorook",
      link: "https://www.twitch.tv/hooroorook",
      icon: TwitchIcon,
    },
    {
      name: "Discord",
      description: ". . .",
      alertMessage: "Ask me directly.",
      icon: DiscordIcon,
    },
  ];

  const projects = [
    {
      name: "Check",
      description: "A minimal checklist app",
      link: "https://check.andrewhan.dev/",
      icon: CircleCheckBigIcon,
    },
    {
      name: "Piano",
      description: "A MIDI pianola",
      link: "https://piano.andrewhan.dev/",
      icon: PianoIcon,
    },
    {
      name: "Butterfly",
      description: "An artwork utilizing regular polygons",
      link: "https://github.com/andrewthehan/butterfly",
      icon: BrushIcon,
    },
    {
      name: "Transcriptions",
      description: "Some piano transcriptions",
      link: "https://transcriptions.andrewhan.dev/",
      icon: ListMusicIcon,
    },
  ];
</script>

<section>
  <p>
    Hello! I'm a software engineer with a passion for code design, games, and <a href="/music"
      >music</a
    >.
  </p>

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

<style>
  section {
    margin: 6px 0;
  }

  .buttons {
    display: flex;
    flex-flow: row;
  }
</style>
