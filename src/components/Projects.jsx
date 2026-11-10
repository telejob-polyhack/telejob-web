import { projects } from "../data.js";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Our projects</h2>
        <div className="projects">
          {projects.map((p, i) => (
            <article className={`project ${i === 0 ? "project--lead" : ""}`} key={p.name}>
              <p className="project__kind">{p.short}</p>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <a href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                Visit {p.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
