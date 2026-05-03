import { FaChartLine, FaShieldHalved, FaStar, FaHammer } from "react-icons/fa6";

const featureContent = [
  {
    icon: <FaChartLine className="feature-icon" />,
    title: "Generate More Leads",
    text: "24/7 customer acquisiton",
  },
  {
    icon: <FaShieldHalved className="feature-icon" />,
    title: "Build Local Trust",
    text: "Credibility that converts",
  },
  {
    icon: <FaStar className="feature-icon" />,
    title: "Stand Out Online",
    text: "Premium positioning",
  },
  {
    icon: <FaHammer className="feature-icon" />,
    title: "Built for Trades",
    text: "Industry-focused design",
  },
];

export default function FeatureMarquee() {
  const duplicatedContent = [...featureContent, ...featureContent];

  return (
    <section className="feature-marquee-container">
      <div className="feature-marquee">
        {duplicatedContent.map((obj, index) => (
          <div key={`${obj.title}-${index}`} className="feature-marquee__obj">
            <div className="feature-icon__container">
              <span className="feature-icon">{obj.icon}</span>
            </div>

            <div>
              <p className="feature-title">{obj.title}</p>
              <p className="feature-text">{obj.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
