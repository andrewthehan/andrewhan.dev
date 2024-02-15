import React from "react";
import * as Icons from "../Icons";

type Props = {
  name: string;
  icon: string;
  url: string;
};

export default function IconLink({ name, icon, url }: Props) {
  function renderIcon(icon: string) {
    const Icon = (Icons as any)[icon];
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
