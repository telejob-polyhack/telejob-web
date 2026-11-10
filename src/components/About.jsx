import { about, video } from "../data.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container split">
        <div>
          <h2>{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div>
          <h3 className="video__title">{video.title}</h3>
          <div className="video">
            {video.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                title="Telejob promo video"
                allow="accelerometer; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <p className="video__empty">
                Add the promo video ID in <code>src/data.js</code> to show it here.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
