export default function Header({ config }) {
  return (
    <section className="header">
      <img
        className="logo"
        src={config.logo}
        alt="logo"
        width="64"
        height="64"
      />
      <header>{config.name}</header>
    </section>
  );
}
