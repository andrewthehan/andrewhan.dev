import BrushIcon from "virtual:icons/lucide/brush";
import CircleCheckBigIcon from "virtual:icons/lucide/circle-check-big";
import ListMusicIcon from "virtual:icons/lucide/list-music";
import PianoIcon from "virtual:icons/lucide/piano";
import GridIcon from "virtual:icons/lucide/grid-3x3";

export const projects = [
  {
    name: "Splatris",
    description: "Fast-paced, colorful, block-dropping area control",
    link: "https://splatris.andrewhan.dev/",
    icon: GridIcon,
  },
  {
    name: "Check",
    description: "A minimal checklist app",
    link: "https://check.andrewhan.dev/",
    icon: CircleCheckBigIcon,
  },
  {
    name: "Piano",
    description: "A MIDI pianola",
    link: "https://piano.andrewhan.dev/",
    icon: PianoIcon,
  },
  {
    name: "Butterfly",
    description: "An artwork utilizing regular polygons",
    link: "https://github.com/andrewthehan/butterfly",
    icon: BrushIcon,
  },
  {
    name: "Transcriptions",
    description: "Some piano transcriptions",
    link: "https://transcriptions.andrewhan.dev/",
    icon: ListMusicIcon,
  },
];
