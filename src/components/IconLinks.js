import { IconContext } from "@react-icons/all-files";
import IconLink from "./IconLink";

export default function IconLinks({ config, activated }) {
  return (
    <section className="icon-links">
      <IconContext.Provider
        value={{ className: activated ? "icon-activated" : "icon" }}
      >
        {config["icon-links"].map((iconLinkProps, i) => (
          <IconLink key={i} {...iconLinkProps} />
        ))}
      </IconContext.Provider>
    </section>
  );
}
