export default function Header({ config, activated }) {
  return (
    <section className="header">
      <a
        href={config["logo-link"]}
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
