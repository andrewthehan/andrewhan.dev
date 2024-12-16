import { toast } from "@zerodevx/svelte-toast";
import BoxTrapIcon from "virtual:icons/game-icons/box-trap";
import BugleCallIcon from "virtual:icons/game-icons/bugle-call";
import CowIcon from "virtual:icons/game-icons/cow";
import MagickTrickIcon from "virtual:icons/game-icons/magick-trick";
import ShinyPurseIcon from "virtual:icons/game-icons/shiny-purse";
import StonePileIcon from "virtual:icons/game-icons/stone-pile";
import TrashCanIcon from "virtual:icons/game-icons/trash-can";
import AchievementCard from "./components/AchievementCard.svelte";
import { GameKey, getJson, setJson } from "./storage";

function fixed(achievements: Achievement[]): Achievement[] {
  return Array.from(
    new Set(
      achievements.filter((achievement: Achievement) =>
        Object.values(Achievement).includes(achievement),
      ),
    ),
  );
}

function setAchievements(achievements: Achievement[]) {
  setJson(GameKey.ACHIEVEMENTS, fixed(achievements));
}

export function getAchievements(): Achievement[] {
  const achievements = getJson(GameKey.ACHIEVEMENTS, []);
  const validated = fixed(achievements);
  if (validated.length !== achievements.length) {
    setJson(GameKey.ACHIEVEMENTS, validated);
  }
  return validated;
}

export function addAchievement(achievement: Achievement) {
  const achievements = getAchievements();
  if (achievements.includes(achievement)) {
    return;
  }

  toast.push({
    component: {
      src: AchievementCard,
      props: {
        achievement,
      },
    },
    dismissable: true,
    initial: 0,
    theme: {
      "--toastBackground": "var(--background-color)",
      "--toastBorder": "1px solid var(--foreground-color)",
      "--toastWidth": "400px",
    },
  });
  setAchievements([...achievements, achievement]);
}

export enum Achievement {
  HELLO = "HELLO",
  ROCK_COLLECTOR = "ROCK_COLLECTOR",
  HOARDER = "HOARDER",
  TREASURE_HUNTER = "TREASURE",
  DIED_TO_A_MIMIC = "DIED_TO_A_MIMIC",
  MAGICIAN = "MAGICIAN",
  DABBED_BEEEEF = "DABBED_BEEEEF",
}

export type AchievementData = {
  name: string;
  description: string;
  icon: any;
};

export function getAchievementData(achievement: Achievement): AchievementData {
  switch (achievement) {
    case Achievement.HELLO:
      return {
        name: "Hello",
        description: "You stumbled upon a hidden adventure.",
        icon: BugleCallIcon,
      };
    case Achievement.ROCK_COLLECTOR:
      return {
        name: "Rock Collector",
        description: "How many rocks do you need..?",
        icon: StonePileIcon,
      };
    case Achievement.HOARDER:
      return {
        name: "Hoarder",
        description: "You don't need it.",
        icon: TrashCanIcon,
      };
    case Achievement.TREASURE_HUNTER:
      return {
        name: "Treasure Hunter",
        description: "You obtained the legendary paper.",
        icon: ShinyPurseIcon,
      };
    case Achievement.DIED_TO_A_MIMIC:
      return {
        name: "Died to a mimic",
        description: "There are no grimoires in here.",
        icon: BoxTrapIcon,
      };
    case Achievement.MAGICIAN:
      return {
        name: "Magician",
        description: "Even Teller would be impressed.",
        icon: MagickTrickIcon,
      };
    case Achievement.DABBED_BEEEEF:
      return {
        name: "#DABBED #BEEEEF",
        description: "You've been blessed by the cow.",
        icon: CowIcon,
      };
  }
}
