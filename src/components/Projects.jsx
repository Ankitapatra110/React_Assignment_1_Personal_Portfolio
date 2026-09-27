function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <p className="section-intro">
        A few examples of the practical work I have built while strengthening my
        frontend and problem-solving skills.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Face Recognition E-Voting System</h3>
          <p>
            A secure voting prototype that uses facial verification to improve
            voter authentication and simplify the election process.
          </p>

          <div className="project-tech">
            <span>Python</span>
            <span>OpenCV</span>
            <span>Flask</span>
          </div>
        </div>

        <div className="project-card">
          <h3>AI Career Guidance Tool</h3>
          <p>
            A user-friendly app that recommends career paths based on skills,
            interests, and future goals, helping users explore their options.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Modern E-Commerce Landing Page</h3>
          <p>
            A polished storefront interface designed to practice layout, product
            presentation, and responsive styling in a realistic setting.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>Responsive UI</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;