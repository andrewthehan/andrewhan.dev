import checkImage from "$lib/res/check.png";
import friendleImage from "$lib/res/friendle.png";
import pianolaImage from "$lib/res/pianola.png";
import splatrisImage from "$lib/res/splatris.png";
import AtSignIcon from "~icons/lucide/at-sign";
import DiscordIcon from "~icons/simple-icons/discord";
import GithubIcon from "~icons/simple-icons/github";
import KofiIcon from "~icons/simple-icons/kofi";
import LinkedinIcon from "~icons/simple-icons/linkedin";
import SteamIcon from "~icons/simple-icons/steam";
import TwitchIcon from "~icons/simple-icons/twitch";
import AndrewDescription from "./AndrewDescription.svelte";
import type { Human } from "./Human";

export const ANDREW: Human = {
  name: "Andrew Han",
  crumbs: [
    { name: "All", alert: "There are too many things here." },
    { name: "Humans", alert: "This is the only human you need." },
    { name: "Andrew Han", alert: "Hi. You're already here." },
  ],
  summaryImage:
    "https://raw.githubusercontent.com/andrewthehan/butterfly/master/static/butterfly-light.png",
  summaryDescription:
    "I'm a software engineer who enjoys balancing logic with creativity. Off the clock, you'll find me playing piano, listening to music, engaging in board and video games, and always appreciating good food.",
  propertyGroups: [
    [
      {
        name: "all reviews",
        value: "Overwhelmingly Positive",
        link: "https://en.wikipedia.org/wiki/Positive",
      },
    ],
    [
      { name: "release date", value: "February 4" },
      { name: "title", value: "Software Engineer" },
    ],
    [
      { name: "employer", value: "Google", link: "https://www.google.com/" },
      {
        name: "location",
        value: "Bay Area",
        link: "https://www.google.com/maps/place/San+Francisco+Bay+Area,+CA",
      },
    ],
  ],
  tags: ["Korean", "Gamer", "Musician", "Water", "Noodles", "Ski", "Crochet"],
  projects: [
    {
      name: "Friendle",
      description: "Wordle with Friends",
      link: "https://friendle.gg/",
      image: friendleImage,
    },
    {
      name: "Splatris",
      description: "Fast-paced, colorful, block-dropping area control",
      link: "https://splatris.andrewhan.dev/",
      image: splatrisImage,
    },
    {
      name: "Check",
      description: "A minimal checklist app",
      link: "https://check.andrewhan.dev/",
      image: checkImage,
    },
    {
      name: "Piano",
      description: "A MIDI pianola",
      link: "https://piano.andrewhan.dev/",
      image: pianolaImage,
    },
    {
      name: "Butterfly",
      description: "An artwork utilizing regular polygons",
      link: "https://github.com/andrewthehan/butterfly",
      image:
        "https://raw.githubusercontent.com/andrewthehan/butterfly/master/static/butterfly-light.png",
    },
  ],
  quickActions: [
    {
      text: "Contact",
      link: "mailto:me@andrewhan.dev",
    },
  ],
  ctas: [
    {
      title: "Say hello",
      description: "Send an email to me@andrewhan.dev",
      button: "Email",
      cost: 0,
      link: "mailto:me@andrewhan.dev",
    },
    {
      title: "Recruit",
      description: "I'm not really looking though...",
      button: "LinkedIn",
      cost: 0,
      link: "https://www.linkedin.com/in/andrewthehan/",
    },
    {
      title: "Buy me a water",
      description: "I don't drink coffee",
      button: "Ko-fi",
      cost: 2,
      link: "https://ko-fi.com/andrewthehan",
    },
  ],
  socials: [
    {
      name: "Email",
      description: "me@andrewhan.dev",
      link: "mailto:me@andrewhan.dev",
      icon: AtSignIcon,
    },
    {
      name: "LinkedIn",
      description: "andrewthehan",
      link: "https://www.linkedin.com/in/andrewthehan/",
      icon: LinkedinIcon,
    },
    {
      name: "GitHub",
      description: "andrewthehan",
      link: "https://github.com/andrewthehan",
      icon: GithubIcon,
    },
    {
      name: "Ko-fi",
      description: "andrewthehan",
      link: "https://ko-fi.com/andrewthehan",
      icon: KofiIcon,
    },
    {
      name: "Steam",
      description: ". . .",
      alertMessage: "Ask me directly.",
      icon: SteamIcon,
    },
    {
      name: "Twitch",
      description: ". . .",
      alertMessage: "Ask me directly.",
      icon: TwitchIcon,
    },
    {
      name: "Discord",
      description: ". . .",
      alertMessage: "Ask me directly.",
      icon: DiscordIcon,
    },
  ],
  descriptionComponent: AndrewDescription,
};
