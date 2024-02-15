import React from "react";
import Config from "../Config";

type Props = {
  config: Config;
  activated: boolean;
};

export default function Header({ config, activated }: Props) {
  return (
    <section className="header">
      <a
        href={config.logoLink}
        target="_blank"
        rel="noopener noreferrer"
        title="Butterfly"
        aria-label="logo link"
      >
        <img
          className={activated ? "logo-activated" : "logo"}
          src={config.logo}
          alt="logo"
          width="64"
          height="64"
        />
      </a>
      <header>{config.name}</header>
    </section>
  );
}
