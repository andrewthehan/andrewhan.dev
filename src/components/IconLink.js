import React from "react";
import * as Icons from "../Icons";

export default function IconLink({ name, icon, url }) {
  function renderIcon(icon) {
    const Icon = Icons[icon];
    return <Icon />;
  }

  return (
    <a
      className="icon-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      aria-label={name}
    >
      {renderIcon(icon)}
    </a>
  );
}
