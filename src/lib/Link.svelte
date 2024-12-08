<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    name: string;
    description: string;
    link?: string;
    alertMessage?: string;
    icon: Snippet<[]>;
  }

  let { name, description, link, alertMessage, icon }: Props = $props();
</script>

<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  onclick={alertMessage != null ? () => alert(alertMessage) : null}
>
  <div class="icon">
    {@render icon()}
  </div>
  <p class="name">{name}</p>
  <p class="description">{description}</p>
</a>

<style>
  a {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;

    cursor: pointer;
  }

  p {
    margin: 0;
  }

  .icon {
    display: flex;
    align-items: center;
  }

  .name {
    flex: 1;
    margin: 0 16px;
  }

  .description {
    filter: brightness(0.5);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
