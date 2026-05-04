import { FaChartLine, FaShieldHalved, FaStar, FaHammer } from "react-icons/fa6";

const featureContent = [
  {
    icon: <FaChartLine className="icon" />,
    title: "Generate More Leads",
    text: "24/7 customer acquisiton",
  },
  {
    icon: <FaShieldHalved className="icon" />,
    title: "Build Local Trust",
    text: "Credibility that converts",
  },
  {
    icon: <FaStar className="icon" />,
    title: "Stand Out Online",
    text: "Premium positioning",
  },
  {
    icon: <FaHammer className="icon" />,
    title: "Built for Trades",
    text: "Industry-focused design",
  },
];

export default function Marquee() {
  const duplicatedContent = [...featureContent, ...featureContent];

  return (
    <section className="marquee-container">
      <div className="marquee">
        {duplicatedContent.map((obj, index) => (
          <div key={`${obj.title}-${index}`} className="marquee__obj">
            <div className="icon__container">
              <span className="icon">{obj.icon}</span>
            </div>

            <div>
              <p className="title">{obj.title}</p>
              <p className="text">{obj.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
