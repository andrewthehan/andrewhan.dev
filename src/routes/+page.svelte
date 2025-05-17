<script lang="ts">
  import { goto } from "$app/navigation";
  import Cta from "$lib/components/Cta.svelte";
  import { ANDREW } from "$lib/data/Andrew";
  import { languageProficiencyValues } from "$lib/data/Human";
  import { Achievement, addAchievement, getAchievementData } from "$lib/game/achievements";
  import SequenceListener from "$lib/game/components/SequenceListener.svelte";
  import { scrollIntoViewHorizontally } from "$lib/utils/htmlUtils";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import "../app.css";
  import Modal from "$lib/components/Modal.svelte";
  import { page } from "$app/stores";

  const human = $state(ANDREW);

  let currentImageIndex = $state(0);
  let rotationTimeoutId = $state<ReturnType<typeof setTimeout> | null>(null);
  const rotationDelay = 5000;

  function startRotationTimer() {
    if (rotationTimeoutId) {
      clearTimeout(rotationTimeoutId);
    }

    rotationTimeoutId = setTimeout(() => {
      setCurrentImageIndex(currentImageIndex + 1);
    }, rotationDelay);
  }

  function setCurrentImageIndex(index: number) {
    currentImageIndex =
      ((index % human.projects.length) + human.projects.length) % human.projects.length;
    const currentImage = document.querySelector(
      `.media-preview:nth-child(${currentImageIndex + 1})`,
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

  let showEmbedModal = $state(false);
</script>

<svelte:head>
  <title>{human.name}</title>
  <meta name="description" content={human.summaryDescription} />

  <meta property="og:title" content={human.name} />
  <meta property="og:description" content={human.summaryDescription} />
  <meta property="og:image" content={human.summaryImage} />

  <meta name="twitter:title" content={human.name} />
  <meta name="twitter:description" content={human.summaryDescription} />
  <meta name="twitter:image" content={human.summaryImage} />
</svelte:head>

<SequenceListener
  sequence={[..."hello"]}
  onTrigger={() => {
    addAchievement(Achievement.HELLO);
    goto("/400");
  }}
/>

<div class="background-container">
  <div class="background"></div>
</div>
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
      <div class="carousel-contents">
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
      <button
        class="left-carousel-button"
        onclick={() => setCurrentImageIndex(currentImageIndex - 1)}
        aria-label="Previous"
      >
        <svg width="38" height="18" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0.25,0.5 0.75,0.3 0.75,0.7" fill="currentColor" />
        </svg>
      </button>
      <button
        class="right-carousel-button"
        onclick={() => setCurrentImageIndex(currentImageIndex + 1)}
        aria-label="Next"
      >
        <svg width="38" height="18" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
          <polygon
            transform="translate(0.5, 0) scale(-1, 1) translate(-0.5, 0)"
            points="0.25,0.5 0.75,0.3 0.75,0.7"
            fill="currentColor"
          />
        </svg>
      </button>
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
    <a class="flat-button" href={action.link}>
      {action.text}
    </a>
  {/each}
</div>
<div class="contents">
  <div class="left-content">
    <div class="ctas">
      {#each human.ctas as cta}
        <Cta cost={cta.cost} action={cta.button} onclick={() => goto(cta.link)}>
          <div class="cta">
            <div class="cta-title">{cta.title}</div>
            <div class="cta-description">{cta.description}</div>
          </div>
        </Cta>
      {/each}
    </div>
    <div class="playlists">
      <div class="playlists-header">
        <div class="playlists-header-text">Playlists for this human</div>
        <a class="playlists-browse-all-button" href="/playlists">
          Browse all ({human.playlists.length})
        </a>
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
            <div>{name}</div>
          </a>
        {/each}
      </div>

      <div class="info-panel">
        <div class="info-panel-title">Languages:</div>
        <table class="language-table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              {#each languageProficiencyValues as proficiency}
                <th>{proficiency}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each human.languages as language}
              <tr>
                <td class="language-name">{language.name}</td>
                {#each languageProficiencyValues as proficiency}
                  <td>
                    {#if language.proficiency === proficiency}
                      <div class="checkmark">✔</div>
                    {:else}
                      <div class="checkmark"></div>
                    {/if}
                  </td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <div class="info-panel">
        <div class="rating">
          <img
            src="https://store.cloudflare.steamstatic.com/public/shared/images/game_ratings/ESRB/e.png?v=2"
            alt="ESRB Rating: Everyone"
            width="60"
            height="90"
          />
          <div class="rating-description">
            <div class="content-descriptors">
              {#each human.contentDescriptors as descriptor}
                <div>{descriptor}</div>
              {/each}
              <div>&nbsp;</div>
            </div>
            <div class="interactive-elements">
              <div class="interactive-elements-title">Interactive Elements</div>
              {human.interactiveElements.join(", ")}
            </div>
          </div>
        </div>
        <div class="rating-agency">Age rating for: ESRB</div>
      </div>
      <div class="info-panel">
        <div class="info-panel-title">
          Includes {Object.values(Achievement).length} Achievements
        </div>
        <div class="achievements">
          {#each Object.values(Achievement).slice(0, 3) as achievement}
            {@const { name, icon: Icon } = getAchievementData(achievement)}
            <div class="achievement" title={name}>
              <Icon font-size={64} />
            </div>
          {/each}
          <a class="achievement-more" href="/achievements">
            View
            <br />
            all {Object.values(Achievement).length}
          </a>
        </div>
      </div>
      <div class="info-panel">
        <div>
          <button class="flat-button" onclick={() => (showEmbedModal = true)}>Embed</button>
        </div>
        <Modal bind:showModal={showEmbedModal}>
          <div class="embed-modal">
            <div class="embed-modal-title">Create Widget to Embed</div>
            <iframe
              src="/widget"
              title={human.name}
              frameborder="0"
              width="600"
              height="200"
            ></iframe>
            <div class="embed-modal-description">
              Copy and paste the HTML below into your website to make the above widget appear
            </div>
            <textarea
              readonly
              value={`<iframe src="${$page.url.origin}/widget" title="${human.name}" frameborder="0" width="600" height="200"></iframe>`}
            ></textarea>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</div>

<style>
  .background-container {
    z-index: -1;
    position: absolute;
    margin: 0;
    width: 99vw;
    height: 99vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  .background {
    position: absolute;
    width: 2000px;
    object-fit: cover;
    aspect-ratio: 3/1;
    filter: opacity(0.15) brightness(0.4) grayscale(0.8) blur(1px);
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://raw.githubusercontent.com/andrewthehan/butterfly/master/static/butterfly-light.png");
    mask-image: radial-gradient(ellipse farthest-corner at center, black 40%, transparent 50%);
  }

  @media (max-width: 600px) {
    .background {
      background: none;
      filter: none;
    }
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
    top: -200px;
    left: calc((250% - 100%) / -2);
    width: 250%;
    height: calc(100% + 200px);
    filter: blur(100px);
    background: radial-gradient(
        ellipse farthest-corner at bottom center,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0) 40%
      ),
      radial-gradient(
        ellipse farthest-corner at center,
        hsl(from var(--highlighted-tinted-color) h s l / 0.6) 0%,
        rgba(0, 0, 0, 0) 60%
      );
  }

  @media (max-width: calc(600px)) {
    .hero::before {
      background: none;
      filter: none;
    }
  }

  .flat-button {
    border: none;
    padding: 0 15px;
    font-size: 15px;
    line-height: 30px;
    cursor: pointer;
    border-radius: 2px;
    color: var(--highlighted-tinted-color);
    background: var(--tinted-color);
    text-decoration: none;
  }

  .flat-button:hover {
    color: var(--bright-font-color);
    background: var(--highlighted-tinted-gradient);
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
    display: flex;
    flex-flow: column;
    position: relative;
  }

  .left-carousel-button,
  .right-carousel-button {
    position: absolute;
    bottom: 0;
    width: 38px;
    height: 18px;
    border: none;
    padding: 0;
    background: hsla(calc(var(--primary-hue) + 5), 40%, 23%, 0.4);
    color: hsl(var(--primary-hue), 40%, 40%);
    border-radius: 3px;
    cursor: pointer;
  }

  .left-carousel-button:hover,
  .right-carousel-button:hover {
    background: var(--highlighted-scrollbar-gradient);
    color: white;
  }

  .left-carousel-button {
    align-self: flex-start;
  }

  .right-carousel-button {
    align-self: flex-end;
    top: calc(-18px * 2);
  }

  .carousel-contents::-webkit-scrollbar-button:horizontal:single-button:decrement {
    width: calc(38px + 1px);
  }

  .carousel-contents::-webkit-scrollbar-button:horizontal:single-button:increment {
    width: calc(38px + 1px);
  }

  .carousel-contents::-webkit-scrollbar {
    border-radius: 3px;
    height: 18px;
  }

  .carousel-contents::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.2);
  }

  .carousel-contents::-webkit-scrollbar-thumb {
    border: none;
    height: 18px;
    border-radius: 3px;
    background: hsl(from var(--scrollbar-color) h s l / 0.4);
  }

  .carousel-contents::-webkit-scrollbar-thumb:hover {
    background: var(--highlighted-scrollbar-gradient);
  }

  .carousel-contents {
    display: flex;
    flex-flow: row;
    gap: 4px;
    overflow-x: scroll;
    padding-bottom: 3px;
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
    padding-bottom: 20px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: row wrap;
    gap: 4px;
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
    border-top: 1px solid;
    border-image: var(--border-gradient) 1 0 0 0;
  }

  .cta {
    padding: 16px;
    padding-bottom: 26px;
    border-radius: 4px;
    background: linear-gradient(-60deg, rgba(226, 244, 255, 0.3) 5%, rgba(84, 107, 115, 0.3) 95%);
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

  .playlists-browse-all-button:hover {
    border-color: var(--bright-font-color);
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
    background: var(--highlighted-darker-tinted-color);
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
    font-size: 12px;
  }

  .info-panel {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%);
    padding: 16px;
    display: flex;
    flex-flow: column;
    gap: 2px;
  }

  .info-panel-title {
    color: var(--dim-font-color);
    margin-bottom: 2px;
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
    width: 12px;
  }

  .language-table {
    border-collapse: collapse;
  }

  .language-table th {
    font-weight: normal;
    text-transform: capitalize;
    color: var(--table-header-color);
  }

  .language-table tr {
    border-bottom: 1px solid var(--table-border-color);
  }

  .language-table td {
    padding: 3px 0;
  }

  .language-name {
    color: var(--dim-font-color);
    margin-bottom: 2px;
    width: 94px;
  }

  .checkmark {
    color: var(--highlighted-tinted-color);
    text-align: center;
  }

  .rating {
    display: flex;
    flex-flow: row;
    gap: 10px;
  }

  .rating-description {
    display: flex;
    flex-flow: column;
  }

  .interactive-elements-title {
    color: var(--dim-font-color);
    margin-top: 4px;
    margin-bottom: 2px;
  }

  .rating-agency {
    margin-top: 8px;
  }

  .achievements {
    display: flex;
    flex-flow: row wrap;
    gap: 4px;
    padding: 4px 0;
    margin-bottom: 5px;
  }

  .achievement,
  .achievement-more {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--highlighted-tinted-color);
  }

  .achievement-more {
    flex: 1;
    border-radius: 1px;
    font-size: 13px;
    color: var(--highlighted-tinted-color);
    background: var(--tinted-color);
    text-decoration: none;
    text-align: center;
  }

  .embed-modal {
    background: radial-gradient(
        circle at top left,
        rgba(74, 81, 92, 0.4) 0%,
        rgba(75, 81, 92, 0) 60%
      ),
      #25282e;
    display: flex;
    flex-flow: column;
    gap: 24px;
    padding: 24px;
    border-top: 1px solid;
    border-image: linear-gradient(
        to right,
        hsl(calc(var(--primary-hue) - 10), 100%, 50%),
        hsl(calc(var(--primary-hue) + 23), 100%, 60%)
      )
      1 0 0 0;
  }

  .embed-modal-title {
    font-size: 22px;
    color: var(--bright-font-color);
    font-weight: bold;
  }

  .embed-modal-description {
    font-size: 14px;
    color: #acb2b8;
  }
</style>
