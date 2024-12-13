<script>
  import { goto } from "$app/navigation";
  import GameButton from "$lib/game/components/GameButton.svelte";
  import GameText from "$lib/game/components/GameText.svelte";
  import { rollChance } from "$lib/game/random";
  import { GameKey, getJson, remove } from "$lib/game/storage";
  import LockedChestIcon from "virtual:icons/game-icons/locked-chest";

  function tryOpenChest() {
    const key = getJson(GameKey.CHEST_KEY, null);
    if (key != null) {
      remove(GameKey.CHEST_KEY);
      if (confirm("You unlocked the chest! Do you want to look inside?")) {
        const isMimic = rollChance(0.1);
        goto(isMimic ? "/mimic" : key);
      }
    } else {
      alert("The chest is locked. You need a key to open it.");
    }
  }
</script>

<GameText element="p">So you noticed the pattern... here's a chest for your efforts.</GameText>

<GameButton onClick={tryOpenChest}>
  <LockedChestIcon font-size={100} color="goldenrod" />
</GameButton>
