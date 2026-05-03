import Image from "next/image";
import Button from "./shared/Button";
import FeatureMarquee from "./FeatureMarquee";
import { FaArrowRight } from "react-icons/fa";

function Badge() {
  return (
    <div className="badge">
      <div className="pulsating-circle"></div>
      <p>Trades Web Specialists</p>
    </div>
  );
}

function HeroTextContent() {
  return (
    <div className="hero-content">
      <h1 className="hero-title">
        High-Quality Web Presence for Independent Professionals
      </h1>

      <p className="hero-desc">
        A focused, professional web presence that gives your customers exactly
        what they need — clarity, trust, and confidence to contact you.
      </p>

      <div className="hero-btns">
        <Button className="btn-primary hero-btn">
          Start Project <FaArrowRight />{" "}
        </Button>

        <Button className="btn-secondary hero-btn">View Our Work</Button>
      </div>
    </div>
  );
}

function HeroSocialProof() {
  return (
    <div className="hero-social-proof">
      <div className="avatar-group">
        <Image
          src="/assets/images/avatar-electrician.jpg"
          width={100}
          height={100}
          alt="Electrician at work"
          className="avatar"
        />
        <Image
          src="/assets/images/avatar-painter.jpg"
          width={100}
          height={100}
          alt="Painter at work"
          className="avatar"
        />
        <Image
          src="/assets/images/avatar-plumber.jpg"
          width={100}
          height={100}
          alt="Plumber at work"
          className="avatar"
        />
      </div>
      <p className="trusted-text">Trusted by local businesses</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-section">
      <Badge />
      <HeroTextContent />
      <HeroSocialProof />
      <FeatureMarquee />
    </section>
  );
}
