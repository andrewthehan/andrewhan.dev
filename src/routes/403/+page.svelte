<script>
  import { goto } from "$app/navigation";
  import GameButton from "$lib/game/components/GameButton.svelte";
  import GameText from "$lib/game/components/GameText.svelte";
  import { rollChance } from "$lib/game/random";
  import LockedChestIcon from "virtual:icons/game-icons/locked-chest";

  function tryOpenChest() {
    const key = localStorage.getItem("key");
    if (key != null) {
      localStorage.removeItem("key");
      if (confirm("You unlocked the chest! Do you want to look inside?")) {
        goto(rollChance(0.9) ? key : "/mimic");
      }
    } else {
      alert("The chest is locked. You need a key to open it.");
    }
  }
</script>

<GameText>So you noticed the pattern... here's a chest for your efforts.</GameText>

<div>
  <GameButton onClick={tryOpenChest}>
    <LockedChestIcon font-size={100} color="goldenrod" />
  </GameButton>
</div>
