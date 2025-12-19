const Hero = () => {
  const scrollToForm = () => {
    document
      .getElementById("registration")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section hero">
      <div className="container">
        <img
          src="/logo.svg"
          alt="Saudi Construction Innovation Summit Logo"
          className="logo"
        />
        <h1>Saudi Construction Innovation Summit</h1>
        <p>Build Beyond with Oracle | Dart Technology</p>
        <div style={{ margin: "20px 0" }}>
          <p>
            <strong>Date:</strong> December 20, 2025
          </p>
          <p>
            <strong>Time:</strong> 9:00 AM - 5:00 PM
          </p>
          <p>
            <strong>Location:</strong> Riyadh, Saudi Arabia
          </p>
        </div>
        <button className="btn" onClick={scrollToForm}>
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
