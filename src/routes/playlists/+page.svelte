<script lang="ts">
  import { ANDREW } from "$lib/data/Andrew";

  const human = $state(ANDREW);
</script>

<div class="container">
  <div class="title">Playlists</div>
  {#each [...new Set(human.playlists.map((p) => p.year))].toSorted().reverse() as year}
    <div class="year-title">{year}</div>
    <div class="playlists">
      {#each human.playlists
        .filter((p) => p.year === year)
        .toSorted((a, b) => a.quarter - b.quarter) as playlist}
        <a class="playlist" href={playlist.link} target="_blank" rel="noopener noreferrer">
          <div class="playlist-title">{playlist.year} Q{playlist.quarter}</div>
        </a>
      {/each}
    </div>
  {/each}
</div>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
  }

  .year-title {
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid;
    border-image: var(--border-gradient) 0 0 1 0;
  }

  .playlists {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
  }

  .playlist {
    background: linear-gradient(-60deg, rgba(226, 244, 255, 0.3) 5%, rgba(84, 107, 115, 0.3) 95%);
    color: var(--bright-font-color);
    border-radius: 4px;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }

  .playlist:hover {
    background: var(--highlighted-darker-tinted-color);
    color: var(--bright-font-color);
  }

  @media (max-width: 600px) {
    .playlists {
      flex-direction: column;
      gap: 0.5rem;
    }

    .playlist {
      width: 100%;
    }
  }
</style>
