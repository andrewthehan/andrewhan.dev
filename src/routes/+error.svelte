<script lang="ts">
  import { goto } from "$app/navigation";
  import SequenceListener from "$lib/game/components/SequenceListener.svelte";
</script>

<SequenceListener sequence={[..."reveal"]} onTrigger={() => goto("/answer/revealed")} />
<div class="content">
  <div>404</div>
  <div>Page Not Found</div>
</div>

<style>
  .content {
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }
</style>
