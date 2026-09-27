function Contact() {
  return (
    <section id="contact">
      <h2>Let&apos;s Connect</h2>
      <p className="section-intro">
        I am open to learning opportunities, collaborations, internships, and
        meaningful tech conversations.
      </p>

      <div className="contact-wrap">
        <div className="contact-card">
          <p>Email</p>
          <a href="mailto:ankitapatra110@gmail.com" className="contact-link">
            ankitapatra110@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <p>Social</p>
          <a href="https://github.com/ankita" className="contact-link" target="_blank" rel="noreferrer">
            github.com/ankita
          </a>
          <br />
          <a href="https://www.linkedin.com/in/ankita-patra-a76135329?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="contact-link" target="_blank" rel="noreferrer">
            linkedin.com/in/ankita-patra-a76135329
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;