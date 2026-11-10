import { ethgh } from "../data.js";

export default function Ethgh() {
  return (
    <section className="section section--band" id="ethgh">
      <div className="container narrow">
        <h2>{ethgh.title}</h2>
        {ethgh.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <a className="btn btn--light" href={ethgh.cta.href} target="_blank" rel="noreferrer">
          {ethgh.cta.label}
        </a>
      </div>
    </section>
  );
}
