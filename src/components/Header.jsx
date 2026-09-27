function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <span className="eyebrow">BCA Student • Frontend Learner</span>
        <h1>Ankita Patra</h1>
        <p>
          I create clean, responsive, and user-friendly digital experiences with a
          strong focus on learning, creativity, and problem solving.
        </p>

        <div className="header-actions">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>
          <a href="#contact" className="secondary-btn">
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;