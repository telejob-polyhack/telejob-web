// All site content lives here, so you can edit text without touching components.
// Values marked FILL_IN were not readable from the live site; replace them with real figures/links.

export const nav = [
  { label: "About", href: "#about" },
  { label: "ETH Get Hired", href: "#ethgh" },
  { label: "Our work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title: "Advance your career with Telejob",
  subtitle:
    "The student organization at ETH Zurich connecting students, researchers and companies through jobs, hackathons, career fairs and pitch events.",
  primaryCta: { label: "Find a job on ETHGH", href: "https://ethgethired.ch" },
  secondaryCta: { label: "See our projects", href: "#projects" },
};

export const about = {
  title: "Get to know ETH",
  paragraphs: [
    "ETH Zurich has a world-class reputation. With the stated mission to educate engineers and scientists, the school focuses primarily on science, technology, engineering, and mathematics.",
    "Telejob provides an opportunity to strengthen skills and prepare for future careers by working on exciting projects, creating your own unique road trip, and enjoying a friendly environment where your ideas can be brought to life.",
  ],
};

export const video = {
  title: "Check out our promo video",
  // Paste the YouTube video ID of the promo video (the part after "v=" in the URL).
  youtubeId: "", // FILL_IN
};

export const ethgh = {
  title: "Find your dream job with ETHGH",
  paragraphs: [
    "Check out how ETHGH, the job platform for talent made at ETH, can help you find your next dream job or internship!",
    "You can search hundreds of listings in both academia and industry and get to know interesting companies.",
  ],
  cta: { label: "Head over to ETHGH today", href: "https://ethgethired.ch" },
};

export const stats = [
  { value: "FILL_IN", label: "ETHGH page views per year" },
  { value: "FILL_IN", label: "poly-E-fair participants" },
  { value: "FILL_IN", label: "CHF in polyPITCH prizes" },
  { value: "FILL_IN", label: "Amazing team members" },
];

export const projects = [
  {
    name: "ETH Get Hired",
    short: "ETHGH",
    description:
      "The largest online job platform in the ETH domain, for talent made in Switzerland, co-run with our long-established partner, ETH Career Center.",
    href: "https://ethgethired.ch",
  },
  {
    name: "ETHack",
    short: "Hackathon",
    description:
      "The 24-hour hackathon where ETH students, postdocs and scientists solve companies' unique challenges.",
    href: "https://ethack.ch",
  },
  {
    name: "poly-E-fair",
    short: "Virtual fair",
    description:
      "The first virtual career fair of ETH Zurich, where students and companies pre-screen and contact each other efficiently, with no travel needed and a more sustainable way to take part.",
    href: "#", // FILL_IN
  },
  {
    name: "polyPITCH",
    short: "Pitch event",
    description:
      "A pitching and networking competition where scientific staff present their startup ideas.",
    href: "#", // FILL_IN
  },
];

export const contact = {
  org: "Telejob",
  address: ["ETH Zurich", "8092 Zurich", "Switzerland"], // FILL_IN exact address
  email: "info@telejob.ch", // FILL_IN confirm
};
