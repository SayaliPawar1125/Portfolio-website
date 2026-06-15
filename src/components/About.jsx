import profile from "../assets/Profile.jpeg";

function About() {
  return (
    <section id="about" className="hero-section">
      <div className="container">

        {/* Resume Button */}
        <div className="text-end mb-4">
          <a
            href="/Resume.pdf"
            download
            className="btn btn-success btn-lg"
          >
            Download Resume
          </a>
        </div>

        <div className="row align-items-center">

          {/* Profile Image */}
          <div className="col-lg-5 text-center mb-4">
            <img
              src={profile}
              alt="Sayali Pawar"
              loading="lazy"
              className="profile-img"
            />
          </div>

          {/* About Content */}
          <div className="col-lg-7">
            <h1 className="fw-bold mb-3">
              Hi, I'm Sayali Pawar
            </h1>

            <h4 className="text-primary mb-4">
              Full Stack Developer | React & Angular Enthusiast
            </h4>

            <p className="lead">
              Entry-Level Software Developer with a strong foundation in
              Computer Science and hands-on experience in Full-Stack Web
              Development using Angular, React, and FastAPI.
            </p>

            <p>
              I completed my Bachelor of Technology in Computer Science
              and Engineering with a CGPA of <strong>8.73</strong>.
              I am passionate about building responsive web applications,
              scalable backend systems, and database-driven solutions
              that provide excellent user experiences.
            </p>

            <p>
              During my internship at <strong>Maxgen Technologies Pvt. Ltd.</strong>,
              I worked with Core Java and applied Object-Oriented Programming
              concepts, exception handling, debugging techniques, and software
              development best practices in a collaborative environment.
            </p>

            <p>
              I have experience developing modern frontend applications using
              React and Angular, creating reusable components, implementing
              responsive user interfaces, and integrating RESTful APIs.
              On the backend, I have worked with FastAPI and Django to build
              secure and scalable web applications.
            </p>

         
            <div className="mt-4">
              <a
                href="#projects"
                className="btn btn-primary btn-lg me-3"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="btn btn-outline-dark btn-lg"
              >
                Contact Me
              </a>
            </div>

            {/* Quick Highlights */}
            <div className="row mt-5">
              <div className="col-md-4 mb-3">
                <div className="card shadow-sm border-0 text-center">
                  <div className="card-body">
                    <h3 className="text-primary">8.73</h3>
                    <p className="mb-0">CGPA</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card shadow-sm border-0 text-center">
                  <div className="card-body">
                    <h3 className="text-primary">2+</h3>
                    <p className="mb-0">Major Projects</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card shadow-sm border-0 text-center">
                  <div className="card-body">
                    <h3 className="text-primary">2025</h3>
                    <p className="mb-0">B.Tech Graduate</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;