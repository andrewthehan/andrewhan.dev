import { IconContext } from "react-icons";
import IconLink from "./IconLink";

export default function IconLinks({ config }) {
  return (
    <section className="icon-links">
      <IconContext.Provider value={{ className: "icon" }}>
        {config["icon-links"].map((iconLinkProps, i) => (
          <IconLink key={i} {...iconLinkProps} />
        ))}
      </IconContext.Provider>
    </section>
  );
}
