import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Code2, Computer, BookOpen, Heart, Rocket } from "lucide-react";
import techImage from "../assets/tech.jpeg";
import "./Home.css";

export default function Home() {
  const [pillClicked, setPillClicked] = useState(false);
  const [ctaIconClicked, setCtaIconClicked] = useState(false);

  const handlePillClick = () => {
    setPillClicked(true);
    setTimeout(() => setPillClicked(false), 200);
  };

  const handleCtaIconClick = () => {
    setCtaIconClicked(true);
    setTimeout(() => setCtaIconClicked(false), 300);
  };

  return (
    <div className="home-page">
      {/* ==========================================
          SECTION 1: HERO SECTION (Side-by-Side + Tech Image)
         ========================================== */}
      <section className="hero-section">
        <div className="container hero-grid">
          {/* Left Side: Main Text & Buttons */}
          <div className="hero-text">
            <div className="badge">
              <span className="badge-icon">
                <Check size={16} />
              </span>{" "}
              Free for every young learner
            </div>
            <h1 className="hero-title">
              Empowering the Next Generation of <span>Software Developers</span>
            </h1>
            <p className="hero-description">
              Learn to code by building real things. Five core courses, thousands
              of students and a community that has your back — from your first
              HTML tag to full-stack apps.
            </p>
            <div className="hero-buttons">
              <Link to="/courses" className="btn btn-primary">
                Explore Courses
              </Link>
              <Link to="/register" className="btn btn-link">
                Join Now &rarr;
              </Link>
            </div>
          </div>

          {/* Right Side: Image Box & Little Interactive Circle Widget */}
          <div className="hero-image-wrapper">
            <div className="hero-card">
              <img
                src={techImage}
                alt="Tech Coding Graphic"
                className="hero-display-img"
              />

              {/* Interactive Circle/Pill Widget */}
              <div
                className={`floating-pill ${pillClicked ? "clicked" : ""}`}
                onClick={handlePillClick}
              >
                <div className="floating-pill-icon">
                  <Code2 size={18} />
                </div>
                <div className="floating-pill-text-group">
                  <span className="floating-pill-text">Learn by Doing</span>
                  <span className="floating-pill-subtext">
                    Build real-world projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: FEATURES SECTION
         ========================================== */}
      <section className="features-section">
        <div className="container">
          <div className="features-heading">
            <h2>Why Tech for Youth?</h2>
            <p>
              Built by developers who started exactly where you are — curious,
              ambitious and ready to build.
            </p>
          </div>

          <div className="features-grid">
            {/* Card 1 */}
            <div className="feature-card">
              <div className="feature-icon blue">
                <Computer size={24} />
              </div>
              <h3>Project-based learning</h3>
              <p>
                Every track ships with real projects you build, break and fix —
                no passive theory marathons, just code you can show off.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
              <div className="feature-icon purple">
                <BookOpen size={24} />
              </div>
              <h3>Free video tracks</h3>
              <p>
                Curated, full-length video courses for every step of your
                journey — completely free, forever, on every device.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card">
              <div className="feature-icon teal">
                <Heart size={24} />
              </div>
              <h3>Local community support</h3>
              <p>
                Join study groups, hackathons and mentor sessions with young
                developers in your area who cheer you on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: CTA SECTION (Centered Bottom)
         ========================================== */}
      <section className="cta-section" id="join">
        <div className="container cta-container">
          {/* Interactive Top Icon */}
          <div
            className={`cta-icon-wrapper ${ctaIconClicked ? "bounce" : ""}`}
            onClick={handleCtaIconClick}
          >
            <span>
              <Rocket size={24} />
            </span>
          </div>

          <h2 className="cta-title">Your coding journey starts today</h2>
          <p className="cta-description">
            Create a free account, pick your track and start building — your
            first project is one click away.
          </p>

          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary">
              Join Now &rarr;
            </Link>
            <Link to="/courses" className="btn btn-secondary">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}