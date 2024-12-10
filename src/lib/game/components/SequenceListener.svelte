<script lang="ts">
  export let sequence: string[];
  export let onTrigger: () => void;

  const input: string[] = [];

  function handleKeyDown(event: KeyboardEvent) {
    input.push(event.key);

    if (input.length > sequence.length) {
      input.shift();
    }

    if (input.length === sequence.length && input.every((value, i) => value === sequence[i])) {
      onTrigger();
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />
