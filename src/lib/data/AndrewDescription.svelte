<script lang="ts">
  import AnimatedText from "$lib/components/AnimatedText.svelte";
  import type { Human } from "./Human";

  const { human }: { human: Human } = $props();
</script>

<p>
  <strong>{human.name} - Release Version 1.0</strong>
</p>
<p>
  Experience the highly anticipated release of the century! This unique title blends deep logic with
  artistic creativity, offering a one-of-a-kind experience. The core loop centers around working,
  eating, playing, and sleeping.
</p>
<AnimatedText text="Work" />
<p>
  {human.name} is a software engineer with a passion for code design. His focus is on backend systems
  and frameworks using Java and Kotlin. He also has experience building simple web apps using React and
  Svelte with TypeScript.
</p>
<p>He is currently working at Google on the server frameworks team.</p>
<AnimatedText text="Projects" />
{#each human.projects as project, i}
  {@const { name, description, link, image } = project}
  <div class="project">
    <img class="project-image" src={image} alt={name} />
    <a class="project-name" href={link} target="_blank" rel="noopener noreferrer">{name}</a>
    <div class="project-description">{description}</div>
    {#if i !== human.projects.length - 1}
      <div class="project-separator"></div>
    {/if}
  </div>
{/each}

<style>
  .project {
    margin: 1em 0;
    display: flex;
    flex-flow: column;
  }

  .project-name {
    font-weight: bold;
    color: hsl(var(--primary-hue), 80%, 50%);
    text-decoration: underline;
  }

  .project-image {
    grid-area: 1 / 1;
    width: 100%;
    object-fit: cover;
  }

  .project-separator {
    margin: 1rem 0;
    border-top: 1px solid;
    border-image: var(--border-gradient) 1 0 0 0;
  }
</style>
