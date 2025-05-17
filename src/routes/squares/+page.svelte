<script>
  import { goto } from "$app/navigation";
  import GameText from "$lib/game/components/GameText.svelte";

  let input = "";

  const acceptable = ["BADFACADE", "BAD FACADE"];

  const hidden = ["DABBEDBEEEEF", "DABBED BEEEEF"];

  function handleSubmit() {
    if (hidden.includes(input.toLocaleUpperCase())) {
      goto("/cow");
      return;
    }

    if (!acceptable.includes(input.toLocaleUpperCase())) {
      alert("Wrong. Try again.");
      return;
    }

    alert("Try entering the Konami Code anywhere on this site.");
  }
</script>

<GameText element="p">You summoned some squares!</GameText>

<div class="boxes">
  <div class="box box-one"></div>
  <div class="box box-two"></div>
</div>

<GameText element="p">But what do they mean?</GameText>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={input} />
  <button type="submit">Submit</button>
</form>

<div class="boxes hidden-boxes">
  <div class="box hidden box-hidden-one"></div>
  <div class="box hidden box-hidden-two"></div>
</div>

<style>
  .boxes {
    display: flex;
    gap: 10px;

    margin: 10px 0;
  }

  .box {
    width: 128px;
    height: 128px;
  }

  .box-one {
    background: #bad;
  }

  .box-two {
    background: #facade;
  }

  .hidden-boxes {
    position: absolute;
    bottom: 64px;
    right: 64px;
  }

  .box-hidden-one {
    background: #dabbed;
  }

  .box-hidden-two {
    background: #beeeef;
  }

  .hidden {
    opacity: 0;
    transition: opacity 1s;
  }

  .hidden:hover {
    opacity: 1;
  }
</style>
