import TypewriterText from "./TypewriterText";
import TikTokEmbed from "./TikTokEmbed";
import yh1 from "../assets/experiences/yh-1.jpg";
import yh2 from "../assets/experiences/yh-2.jpg";
import mtac2 from "../assets/experiences/mtac-2.jpg";
import mtac3 from "../assets/experiences/mtac-3.jpg";
import mtac4 from "../assets/experiences/mtac-4.jpg";
import mtac5 from "../assets/experiences/mtac-5.jpg";
import mtac6 from "../assets/experiences/mtac-6.jpg";

const experienceColumns = [
  {
    role: "Founder & Product Designer",
    org: "YH Models",
    subtitle: "Original 3D-printed low-poly figurines, designed and sold online. Recieved $3000 grant from city.",
    slides: [
      {
        type: "tiktok",
        url: "https://www.tiktok.com/@yh.models/video/7416171968195611910",
        videoId: "7416171968195611910",
      },
      { type: "image", src: yh1 },
      { type: "image", src: yh2 },
    ],
  },
  {
    role: "Co-Chair",
    org: "Markham Teen Arts Council",
    subtitle: "Youth division of the Markham Arts Council — organized fundraisers and events across York Region. Generated $8000+ revenue across two years.",
    slides: [
      { type: "image", src: mtac2 },
      { type: "image", src: mtac3 },
      { type: "image", src: mtac4 },
      { type: "image", src: mtac5 },
      { type: "image", src: mtac6 },
    ],
  },
];

function Experiences() {
  return (
    <section id="experiences" className="experiences">
      <TypewriterText as="h2" text="Previous Experiences" speed={14} />
      <div className="experience-columns">
        {experienceColumns.map((col, index) => (
          <div className="experience-column" key={index}>
            <div className="experience-header">
              <TypewriterText as="h3" text={col.role} speed={11} />
              <TypewriterText as="p" className="experience-org" text={col.org} speed={6} />
              <TypewriterText as="p" className="experience-subtitle" text={col.subtitle} speed={3} />
            </div>
            <div className="experience-scroll">
              {col.slides.map((slide, i) =>
                slide.type === "tiktok" ? (
                  <div className="experience-slide experience-slide-video" key={i}>
                    <TikTokEmbed videoId={slide.videoId} />
                  </div>
                ) : (
                  <img
                    src={slide.src}
                    alt={`${col.org} ${i + 1}`}
                    className="experience-photo"
                    key={i}
                    loading="lazy"
                  />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
