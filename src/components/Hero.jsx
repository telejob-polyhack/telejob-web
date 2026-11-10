import { hero, projects } from "../data.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={hero.primaryCta.href} target="_blank" rel="noreferrer">
              {hero.primaryCta.label}
            </a>
            <a className="btn btn--ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <ul className="hero__ticker" aria-label="Telejob projects">
          {projects.map((p) => (
            <li key={p.name}>{p.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
