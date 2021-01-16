import React, { lazy, Suspense } from "react";

export default function IconLink({ name, icon, url }) {
  function renderIcon(icon) {
    const Icon = lazy(() =>
      import("react-icons/all").then((m) => ({
        default: m[icon],
      }))
    );

    return <Icon />;
  }

  return (
    <Suspense fallback={<span>.</span>}>
      <a
        className="icon-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
      >
        {renderIcon(icon)}
      </a>
    </Suspense>
  );
}
