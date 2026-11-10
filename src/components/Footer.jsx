import { contact } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div>
          <p className="wordmark wordmark--footer">tele<span>job</span></p>
          <address>
            {contact.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </div>
        <div>
          <p>Questions or partnership ideas?</p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} {contact.org}</p>
      </div>
    </footer>
  );
}
