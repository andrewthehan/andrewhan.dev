<script lang="ts">
  import { playlists } from "$lib/data/playlists";
  import YoutubeIcon from "virtual:icons/simple-icons/youtube";
</script>

<section>
  <h2>Music</h2>
  {#each Array.from(new Set(playlists.map((p) => p.year))).sort((a, b) => b - a) as year (year)}
    <h3>{year}</h3>
    <div class="chips">
      {#each playlists.filter((p) => p.year === year) as { quarter, link } (link)}
        <a href={link} target="_blank" rel="noopener noreferrer" class="chip">
          <YoutubeIcon />
          <div>Quarter {quarter}</div>
        </a>
      {/each}
    </div>
  {/each}
</section>

<style>
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .chip {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: var(--primary-color);
    cursor: pointer;
  }

  .chip:hover {
    filter: brightness(0.9);
    color: inherit;
  }
</style>
