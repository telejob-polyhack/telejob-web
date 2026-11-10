import { stats } from "../data.js";

export default function Stats() {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2>Our work</h2>
        <dl className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt>{s.label}</dt>
              <dd className={s.value === "FILL_IN" ? "stat--missing" : ""}>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
