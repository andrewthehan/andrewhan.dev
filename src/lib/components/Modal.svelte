<!-- Copied and adapted from https://svelte.dev/playground/modal?version=5.30.1 -->
<script>
  let { showModal = $bindable(), children } = $props();

  let dialog = $state(); // HTMLDialogElement

  $effect(() => {
    if (showModal) dialog.showModal();
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialog}
  onclose={() => (showModal = false)}
  onclick={(e) => {
    if (e.target === dialog) dialog.close();
  }}
>
  <div>
    {@render children?.()}
    <!-- svelte-ignore a11y_autofocus -->
    <button onclick={() => dialog.close()}>X</button>
  </div>
</dialog>

<style>
  dialog {
    border-radius: 0.2em;
    border: none;
    padding: 0;
  }
  dialog:focus {
    outline: none;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.8);
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    position: absolute;
    top: 8px;
    right: 4px;
    color: rgba(255, 255, 255, 0.7);
    background: transparent;
    font-size: 18px;
    border: none;
    filter: blur(0.5px);
    cursor: pointer;
  }
  button:hover {
    color: rgba(255, 255, 255, 1);
  }
</style>
