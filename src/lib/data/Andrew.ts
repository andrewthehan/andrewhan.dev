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
      name: "Pianola",
      description: "A MIDI pianola",
      link: "https://piano.andrewhan.dev/",
      image: pianolaImage,
    },
    {
      name: "Butterfly",
      description: "An artwork utilizing regular polygons",
      link: "https://butterfly.andrewhan.dev/",
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
  playlists: [
    {
      year: 2020,
      quarter: 2,
      link: "https://youtube.com/playlist?list=PLmhoP55vqRdy-UXu-ElTPbU5FmVwIHOV3",
    },
    {
      year: 2020,
      quarter: 3,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdwIleivI7v-zwM0WD5rGLFs",
    },
    {
      year: 2020,
      quarter: 4,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdxLyTUhNJCe5e_puj5aQEUU",
    },
    {
      year: 2021,
      quarter: 1,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdwNV_RW1o27JICQZhBx_FJm",
    },
    {
      year: 2021,
      quarter: 2,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdwWlCTwqez_EhBuD1Cl9L55",
    },
    {
      year: 2021,
      quarter: 3,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdwuBXjgAepfI9GGRyTUMQid",
    },
    {
      year: 2021,
      quarter: 4,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdwTdz0BAQaiVyrzSteMFkHA",
    },
    {
      year: 2022,
      quarter: 1,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdxd18st6uZV_AtgusPfEewA",
    },
    {
      year: 2022,
      quarter: 2,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdyXmLLhtZRafCGznConzk7l",
    },
    {
      year: 2022,
      quarter: 3,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdzMWiDjbj7np-XKd_RSSpWg",
    },
    {
      year: 2022,
      quarter: 4,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdynUHQDZN2bPA8qwXU_S1Xy",
    },
    {
      year: 2023,
      quarter: 1,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdwL6FQErq5RjRM7sXedFmtA",
    },
    {
      year: 2023,
      quarter: 2,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdytUhD4Z01Ux5RCv8tyDSHq",
    },
    {
      year: 2023,
      quarter: 3,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdzgS4AyP2l3-E8JWTq7eQDO",
    },
    {
      year: 2023,
      quarter: 4,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdy2MMrYwjxTeQDswGC53XFU",
    },
    {
      year: 2024,
      quarter: 1,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdxMXlYUpfm3pEA784q9g3hC",
    },
    {
      year: 2024,
      quarter: 2,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdweNe6zHaIiqTOfzaxmIlFM",
    },
    {
      year: 2024,
      quarter: 3,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdxq9FzAThAyveVVf0qdS_tF",
    },
    {
      year: 2024,
      quarter: 4,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdzTyBfmxMw82FPzaySFFS47",
    },
    {
      year: 2025,
      quarter: 1,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdypjofES-Dc9p764i-f35jb",
    },
    {
      year: 2025,
      quarter: 2,
      link: "https://www.youtube.com/playlist?list=PLmhoP55vqRdwTWR7t-EAtwNaZUGa8BhpV",
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
  contentDescriptors: ["Comic Mischief"],
  interactiveElements: ["In-Game Purchases", "Users Interact", "Unrestricted Internet"],
  languages: [
    { name: "English", proficiency: "advanced" },
    { name: "Korean", proficiency: "beginner" },
    { name: "Spanish", proficiency: "beginner" },
    { name: "Java", proficiency: "advanced" },
    { name: "Kotlin", proficiency: "advanced" },
    { name: "JavaScript", proficiency: "advanced" },
    { name: "TypeScript", proficiency: "advanced" },
    { name: "HTML", proficiency: "intermediate" },
    { name: "CSS", proficiency: "intermediate" },
    { name: "Python", proficiency: "intermediate" },
    { name: "C++", proficiency: "beginner" },
  ],
  awards: [
    {
      name: "MTAC CM for Piano Performance and Theory (Level 10 Advanced)",
      image:
        "https://www.mtac.org/wp-content/uploads/2017/10/cropped-MTAC-Logo-Association_FINAL_circle-R_OL_cs5.jpg",
      link: "https://www.mtac.org/programs/cm/",
    },
  ],
};
