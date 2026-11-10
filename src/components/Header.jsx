import { useState } from "react";
import { nav } from "../data.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="wordmark" aria-label="Telejob home">
          tele<span>job</span>
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={`nav ${open ? "nav--open" : ""}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
