function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="about-grid">
        <div className="about-card">
          <p>
            I am Ankita Patra, a dedicated BCA student with a strong interest in
            software development and modern frontend technologies. I enjoy
            creating digital experiences that are not only functional, but also
            visually engaging and easy to use.
          </p>
          <p>
            My learning journey includes programming fundamentals, data structures,
            SQL, JavaScript, and React. I am always looking for ways to improve
            my understanding of both technical logic and user-focused design.
          </p>
        </div>

        <div className="about-points">
          <div className="point-item">
            <strong>Creative thinker</strong>
            <span>I enjoy transforming ideas into polished interfaces.</span>
          </div>
          <div className="point-item">
            <strong>Problem solver</strong>
            <span>I like breaking down challenges and finding practical solutions.</span>
          </div>
          <div className="point-item">
            <strong>Growth-driven</strong>
            <span>I am constantly learning through projects and self-practice.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;