import { IconContext } from "@react-icons/all-files";
import IconLink from "./IconLink";
import React from "react";
import Config from "../Config";

type Props = {
  config: Config;
  activated: boolean;
};

export default function IconLinks({ config, activated }: Props) {
  return (
    <section className="icon-links">
      <IconContext.Provider
        value={{ className: activated ? "icon-activated" : "icon" }}
      >
        {config.iconLinks.map((iconLinkProps, i) => (
          <IconLink key={i} {...iconLinkProps} />
        ))}
      </IconContext.Provider>
    </section>
  );
}
