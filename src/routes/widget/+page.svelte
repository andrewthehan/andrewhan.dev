<script>
  import Cta from "$lib/components/Cta.svelte";
  import { ANDREW } from "$lib/data/Andrew";

  const human = $state(ANDREW);
</script>

<div class="container">
  <Cta cost={0} action="Say hello" onclick={() => window.open("https://andrewhan.dev", "_blank")}>
    <div class="content">
      <div class="title">Meet {human.name}</div>
      <div class="body">
        <img src={human.summaryImage} alt={human.name} width="100" height="100" />
        <div class="description">
          {human.summaryDescription}
        </div>
      </div>
    </div>
  </Cta>
</div>

<style>
  :global(body) {
    background: transparent !important;
  }

  :global(.content) {
    max-width: 100vw !important;
  }

  .container {
    display: flex;
    align-items: center;
    margin-bottom: 17px;
    border-radius: 4px;
    border-top: 1px solid #424c5c;
    border-left: 1px solid #424c5c;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.4);
  }

  .content {
    display: flex;
    flex-flow: column;
    gap: 10px;
    padding: 15px;
    border-radius: 4px;
    background: linear-gradient(130deg, #3b4351, #282e39);
    color: var(--bright-font-color);
  }

  .title {
    font-size: 21px;
    line-height: 28px;
  }

  .body {
    display: flex;
    flex-flow: row;
    gap: 10px;
  }

  .description {
    font-size: 13px;
    color: #c9c9c9;
    margin-bottom: 16px;
  }
</style>
