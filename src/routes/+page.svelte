<script lang="ts">
  import { goto } from "$app/navigation";
  import Link from "$lib/components/Link.svelte";
  import SequenceListener from "$lib/game/components/SequenceListener.svelte";
  import { projects } from "$lib/data/projects";
  import { socials } from "$lib/data/socials";
  import "../app.css";
  import { Achievement, addAchievement } from "$lib/game/achievements";
</script>

<SequenceListener
  sequence={[..."hello"]}
  onTrigger={() => {
    addAchievement(Achievement.HELLO);
    goto("/400");
  }}
/>
<pre>Typing code is what I do,
Yet I love to play piano too.
Playing games, both digital and board,
Eating yummy food, I can't afford.

Hello, I'm just a normal guy,
Enjoying life, it's no lie!
Living here in the Bay Area,
Loving to ski, it's fair to say,
On the weekend, I'm carefree, hooray!</pre>

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
</style>
