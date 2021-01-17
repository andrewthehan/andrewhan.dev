export default function Header({ config, activated }) {
  return (
    <section className="header">
      <img
        className={activated ? "logo-activated" : "logo"}
        src={config.logo}
        alt="logo"
        width="64"
        height="64"
      />
      <header>{config.name}</header>
    </section>
  );
}
