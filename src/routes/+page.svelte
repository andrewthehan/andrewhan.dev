<script lang="ts">
  import { goto } from "$app/navigation";
  import { Achievement, addAchievement } from "$lib/game/achievements";
  import SequenceListener from "$lib/game/components/SequenceListener.svelte";
  import { fade } from "svelte/transition";
  import "../app.css";
  import { ANDREW } from "$lib/data/Andrew";
  import { onMount } from "svelte";
  import { scrollIntoViewHorizontally } from "$lib/utils/htmlUtils";

  const human = $state(ANDREW);

  let currentImageIndex = $state(0);
  let rotationTimeoutId = $state<ReturnType<typeof setTimeout> | null>(null);
  const rotationDelay = 5000;

  function startRotationTimer() {
    if (rotationTimeoutId) {
      clearTimeout(rotationTimeoutId);
    }

    rotationTimeoutId = setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % human.projects.length);
    }, rotationDelay);
  }

  function setCurrentImageIndex(index: number) {
    currentImageIndex = index;
    const currentImage = document.querySelector(
      `.media-preview:nth-child(${index + 1})`,
    ) as HTMLElement;
    scrollIntoViewHorizontally(currentImage, currentImage.parentElement!, {
      behavior: "smooth",
      inline: "nearest",
    });
    startRotationTimer();
  }

  onMount(() => {
    startRotationTimer();
    return () => {
      if (rotationTimeoutId) clearTimeout(rotationTimeoutId);
    };
  });

  const parseHue = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--primary-hue"),
  );
  let hue = $state(isNaN(parseHue) ? 202 : parseHue);

  let animationFrameId = $state<ReturnType<typeof requestAnimationFrame> | null>(null);
  let lastTimestamp = $state(0);
  function cycle(timestamp: number) {
    const deltaTime = timestamp - lastTimestamp;
    hue = (hue + 0.1 * deltaTime) % 360;
    document.documentElement.style.setProperty("--primary-hue", `${hue}`);

    lastTimestamp = timestamp;
    animationFrameId = requestAnimationFrame(cycle);
  }
</script>

<SequenceListener
  sequence={[..."hello"]}
  onTrigger={() => {
    addAchievement(Achievement.HELLO);
    goto("/400");
  }}
/>

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

<div class="background"></div>
<div class="header">
  <div class="breadcrumbs">
    {#each human.crumbs as crumb, i}
      {#if i > 0}
        <div>&gt;</div>
      {/if}
      <a href="/" onclick={() => alert(crumb.alert)}>
        {crumb.name}
      </a>
    {/each}
  </div>
  <h1 class="title">{human.name}</h1>
</div>
<div class="hero">
  <div class="media">
    <div class="main-media-container">
      {#key currentImageIndex}
        <img
          transition:fade
          class="main-media"
          src={human.projects[currentImageIndex].image}
          alt={human.name}
        />
      {/key}
      {#key currentImageIndex}
        <img
          transition:fade
          class="main-media"
          src={human.projects[currentImageIndex].image}
          alt={human.name}
        />
      {/key}
    </div>
    <div class="carousel">
      {#each human.projects as project, i}
        <button
          class="media-preview"
          class:selected={i === currentImageIndex}
          onclick={(e) => setCurrentImageIndex(i)}
        >
          <img src={project.image} alt={human.name} />
        </button>
      {/each}
    </div>
  </div>
  <div class="summary">
    <img class="summary-image" src={human.summaryImage} alt={human.name} />
    <div class="summary-contents">
      <div class="summary-description">
        {human.summaryDescription}
      </div>
      <div class="summary-property-groups">
        {#each human.propertyGroups as propertyGroup}
          <div class="summary-property-group">
            {#each propertyGroup as property}
              <div class="property">
                <span class="property-name">{property.name}:</span>
                {#if property.link == null}
                  <span class="property-value">{property.value}</span>
                {:else}
                  <div class="property-value">
                    <a
                      class="property-link"
                      href={property.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {property.value}
                    </a>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        {/each}
      </div>
      <div class="tag-header">Popular user-defined tags for this product:</div>
      <div class="tags">
        {#each human.tags as tag}
          <div class="tag">{tag}</div>
        {/each}
      </div>
    </div>
  </div>
</div>
<div class="quick-actions">
  {#each human.quickActions as action}
    <a class="quick-action" href={action.link}>
      {action.text}
    </a>
  {/each}
</div>
<div class="contents">
  <div class="left-content">
    <div class="ctas">
      {#each human.ctas as cta}
        <div class="cta">
          <div class="cta-title">{cta.title}</div>
          <div class="cta-description">{cta.description}</div>
          <div class="cta-action">
            <div class="cta-cost">
              {#if cta.cost > 0}
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
                  cta.cost,
                )}
              {:else}
                Free
              {/if}
            </div>
            <a class="cta-button" href={cta.link} target="_blank" rel="noopener noreferrer">
              {cta.button}
            </a>
          </div>
        </div>
      {/each}
    </div>
    <div class="playlists">
      <div class="playlists-header">
        <div class="playlists-header-text">Playlists for this human</div>
        <a class="playlists-browse-all-button" href="/playlists">
          Browse all ({human.playlists.length})</a
        >
      </div>
      {#each human.playlists
        .toSorted((a, b) => b.year - a.year || b.quarter - a.quarter)
        .slice(0, 5) as playlist}
        <a class="playlist" href={playlist.link} target="_blank" rel="noopener noreferrer">
          <div class="playlist-title">{playlist.year} Q{playlist.quarter}</div>
          <div class="playlist-price">Free</div>
        </a>
      {/each}
    </div>
    <div class="description">
      <div class="description-header">About me</div>
      <div class="description-text">
        {#snippet description()}
          {@const { descriptionComponent: DescriptionComponent } = human}
          <DescriptionComponent {human} />
        {/snippet}
        {@render description()}
      </div>
    </div>
  </div>
  <div class="right-content">
    <div class="info">
      <div class="info-panel">
        {#each human.socials as social}
          {@const { name, icon: Icon, description, link, alertMessage } = social}
          <a
            class="info-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title={description}
            onclick={() => {
              if (alertMessage) alert(alertMessage);
            }}
          >
            <div class="info-link-icon"><Icon /></div>
            <div class="info-link-name">{name}</div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .background {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 50%;
    filter: opacity(0.1) brightness(0.5) grayscale(0.8);
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://raw.githubusercontent.com/andrewthehan/butterfly/master/static/butterfly-light.png");
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  }

  .header {
    margin: 10px 0;
    width: 100%;
  }

  .breadcrumbs {
    display: flex;
    flex-flow: row;
    gap: 0.3rem;
    font-size: 12px;
    color: var(--dim-font-color);
  }

  .breadcrumbs a {
    color: var(--dim-font-color);
    text-decoration: none;
  }

  .breadcrumbs a:hover {
    color: var(--bright-font-color);
  }

  .title {
    font-size: 26px;
    color: var(--bright-font-color);
    margin: 5px 0;
    line-height: 1.2;
    font-weight: normal;
  }

  .hero {
    position: relative;
    width: 100%;

    flex: 1;
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 100%);
    display: flex;
    flex-flow: row wrap-reverse;
    gap: 16px;
    padding-bottom: 12px;
  }

  .hero::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: calc((100vw - 100%) / -2);
    width: 100vw;
    height: 100%;
    background: radial-gradient(
      ellipse farthest-corner at bottom center,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 60%
    );
  }

  .media {
    max-width: 100%;
    width: 600px;
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    gap: 4px;
  }

  .main-media-container {
    display: grid;
  }

  .main-media {
    grid-area: 1 / 1;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 5/3;
  }

  .carousel {
    position: relative;
    display: flex;
    flex-flow: row;
    gap: 4px;
    overflow-x: scroll;
  }

  .carousel::-webkit-scrollbar-button:horizontal:single-button:decrement {
    width: 38px;
    border-radius: 3px;
    background: rgba(35, 60, 81, 0.4);
    background-image: url('data:image/svg+xml;utf8,<svg width="38" height="18" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><polygon points="0.25,0.5 0.75,0.3 0.75,0.7" fill="rgb(61, 108, 141)"/></svg>');
  }

  .carousel::-webkit-scrollbar-button:horizontal:single-button:decrement:hover {
    background: #3d6c8d;
    background-image: url('data:image/svg+xml;utf8,<svg width="38" height="18" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><polygon points="0.25,0.5 0.75,0.3 0.75,0.7" fill="white"/></svg>');
  }

  .carousel::-webkit-scrollbar-button:horizontal:single-button:increment {
    width: 38px;
    border-radius: 3px;
    background: rgba(35, 60, 81, 0.4);
    background-image: url('data:image/svg+xml;utf8,<svg width="38" height="18" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><polygon transform="translate(0.5, 0) scale(-1, 1) translate(-0.5, 0)" points="0.25,0.5 0.75,0.3 0.75,0.7" fill="rgb(61, 108, 141)"/></svg>');
  }

  .carousel::-webkit-scrollbar-button:horizontal:single-button:increment:hover {
    background: #3d6c8d;
    background-image: url('data:image/svg+xml;utf8,<svg width="38" height="18" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><polygon transform="translate(0.5, 0) scale(-1, 1) translate(-0.5, 0)" points="0.25,0.5 0.75,0.3 0.75,0.7" fill="white"/></svg>');
  }

  .carousel::-webkit-scrollbar {
    border-radius: 3px;
    height: 18px;
  }

  .carousel::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.2);
  }

  .carousel::-webkit-scrollbar-thumb {
    border: none;
    height: 18px;
    border-radius: 3px;
    background: rgba(35, 60, 81, 0.4);
  }

  .carousel::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #3d6c8d 0%, #2e5470 100%);
  }

  .media-preview {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .media-preview img {
    width: 115px;
    object-fit: cover;
    aspect-ratio: 23/13;
  }

  .media-preview.selected {
    border: 3px solid #d6d7d8;
  }

  .summary {
    width: 324px;
    flex: 1 1 auto;
    display: flex;
    flex-flow: row wrap;
    align-items: start;
    align-content: flex-start;
    gap: 7px;
  }

  .summary-image {
    max-width: 100vw;
    width: 256px;
    flex: 1 0 auto;
    object-fit: cover;
    aspect-ratio: 2/1;
  }

  .summary-contents {
    width: 256px;
    flex: 1 0 auto;
    display: flex;
    flex-flow: column;
    gap: 7px;
  }

  .summary-description {
    font-size: 13px;
    line-height: 18px;
    padding-right: 16px;
  }

  .summary-property-groups {
    display: flex;
    flex-flow: column;
    gap: 0.7rem;
  }

  .summary-property-group {
    display: flex;
    flex-flow: column;
    gap: 0.1rem;
  }

  .property {
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  .property-name {
    flex: 1;
    font-size: 10px;
    text-transform: uppercase;
    color: #556772;
  }

  .property-value {
    flex: 2;
    font-size: 12px;
    color: var(--dim-font-color);
  }

  .property-link {
    color: var(--highlighted-tinted-color);
    text-decoration: none;
  }

  .property-link:hover {
    color: var(--bright-font-color);
  }

  .tag-header {
    font-size: 12px;
    line-height: 19px;
    color: #556772;
  }

  .tags {
    display: flex;
    flex-flow: row wrap;
    gap: 2px;
  }

  .tag {
    font-size: 11px;
    color: var(--highlighted-tinted-color);
    padding: 3.5px 7px;
    background: var(--tinted-color);
    border-radius: 2px;
    cursor: pointer;
  }

  .tag:hover {
    background: var(--highlighted-tinted-gradient);
    color: #ffffff;
  }

  .quick-actions {
    width: 100%;
    padding: 16px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: row wrap;
    gap: 4px;
  }

  .quick-action {
    border: none;
    padding: 0 15px;
    font-size: 15px;
    line-height: 30px;
    cursor: pointer;
    border-radius: 2px;
    color: var(--highlighted-tinted-color);
    background: var(--tinted-color);
    margin-bottom: 4px;
    text-decoration: none;
  }

  .quick-action:hover {
    color: var(--bright-font-color);
    background: var(--highlighted-tinted-gradient);
  }

  .contents {
    margin-top: 32px;
    width: 100%;
    display: flex;
    flex-flow: row wrap-reverse;
    align-items: stretch;
    gap: 14px;
  }

  .left-content {
    max-width: 100%;
    width: 616px;
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    gap: 30px;
  }

  .right-content {
    max-width: 100%;
    width: 308px;
    flex: 1 1 auto;
  }

  .ctas {
    display: flex;
    flex-flow: column;
    gap: 28px;
  }

  .cta {
    position: relative;
    display: flex;
    flex-flow: column;
    padding: 16px;
    padding-bottom: 26px;
    background: linear-gradient(-60deg, rgba(226, 244, 255, 0.3) 5%, rgba(84, 107, 115, 0.3) 95%);
    border-radius: 4px;
  }

  .cta:first-of-type {
    border-top: 1px solid;
    border-image: var(--border-gradient) 1 0 0 0;
  }

  .cta-title {
    font-size: 21px;
    line-height: 23px;
    color: var(--bright-font-color);
  }

  .cta-description {
    font-size: 13px;
    line-height: 18px;
    color: var(--dim-font-color);
    margin-top: 4px;
  }

  .cta-action {
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

  .cta-cost {
    padding: 0 12px;
    font-size: 13px;
  }

  .cta-button {
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

  .cta-button:hover {
    color: var(--bright-font-color);
    background: var(--secondary-highlighted-tinted-gradient);
  }

  .playlists {
    display: flex;
    flex-flow: column;
    gap: 1px;
    margin-top: 30px;
  }

  .playlists-header {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    height: 26px;
  }

  .playlists-header-text {
    font-size: 14px;
    color: var(--bright-font-color);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .playlists-browse-all-button {
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 2px;
    color: var(--bright-font-color);
    padding: 2px 15px;
    font-size: 11px;
    text-decoration: none;
    line-height: 14px;
  }

  .playlist {
    background: linear-gradient(-60deg, rgba(226, 244, 255, 0.3) 5%, rgba(84, 107, 115, 0.3) 95%);
    padding: 4px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    font-size: 12px;
    color: var(--dim-font-color);
    text-decoration: none;
  }

  .playlist:hover {
    background: #417a9b;
    color: var(--bright-font-color);
  }

  .playlist:first-of-type {
    border-top: 1px solid;
    border-image: var(--border-gradient) 1 0 0 0;
  }

  .playlist-price {
    color: var(--bright-font-color);
  }

  .description {
    line-height: 1.5em;
    font-size: 14px;
  }

  .description-header {
    font-size: 14px;
    text-transform: uppercase;
    color: var(--bright-font-color);
    letter-spacing: 0.03em;
    padding-bottom: 3px;
    border-bottom: 1px solid;
    border-image: var(--border-gradient) 0 0 1 0;
  }

  .info {
    display: flex;
    flex-flow: column;
    gap: 8px;
  }

  .info-panel {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%);
    padding: 16px;
    display: flex;
    flex-flow: column;
    gap: 2px;
  }

  .info-link {
    background: rgba(103, 193, 245, 0.1);
    color: var(--highlighted-tinted-color);
    padding: 5px 8px;
    border-radius: 1px;
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    cursor: pointer;
  }

  .info-link:hover {
    background: var(--highlighted-tinted-gradient);
    color: var(--bright-font-color);
  }

  .info-link-icon {
    color: var(--bright-font-color);
    display: flex;
    align-items: center;
    font-size: 12px;
    width: 12px;
  }

  .info-link-name {
    font-size: 12px;
  }
</style>
