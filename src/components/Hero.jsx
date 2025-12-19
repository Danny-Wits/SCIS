export default function Hero() {
  const scrollToForm = () => {
    document
      .getElementById("registration")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero">
      <div className="container hero-content">
        <img src="/logo.svg" alt="SCIS Logo" className="hero-logo" />

        <h1 className="hero-title">Saudi Construction Innovation Summit</h1>

        <p className="hero-subtitle">
          Build Beyond with <strong>Oracle</strong> &amp;{" "}
          <strong>Dart Technology</strong>
        </p>

        <div className="hero-meta">
          <span>📅 9 December 2025</span>
          <span>📍 Hilton Olaya, Riyadh</span>
          <span>⏰ 10:30 AM onwards</span>
        </div>

        <div className="hero-actions">
          <a onClick={scrollToForm} className="btn">
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
