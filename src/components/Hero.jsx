function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small-text">Welcome to my portfolio</p>

        <h1>
          I build <span>modern</span> experiences through code.
        </h1>

        <p className="hero-description">
          I am a BCA student passionate about web development, UI design, and
          problem solving. I enjoy turning ideas into practical, engaging,
          and efficient digital experiences that feel smooth and intuitive.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work
          </a>
          <a href="#about" className="secondary-btn">
            Read More
          </a>
        </div>
      </div>

      <div className="hero-panel">
        <span className="status-pill">Available for internships</span>
        <ul className="profile-card">
          <li>
            <strong>3+</strong>
            <span>personal projects</span>
          </li>
          <li>
            <strong>6</strong>
            <span>tech skills in progress</span>
          </li>
          <li>
            <strong>100%</strong>
            <span>curiosity and growth mindset</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;