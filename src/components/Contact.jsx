function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Let's Connect</h2>
          <p className="lead text-muted">
            I am actively seeking internship and full-time
            opportunities in Software Development, Full Stack
            Development, and React Development.
          </p>
        </div>

        <div className="row justify-content-center">

          <div className="col-lg-8">

            <div className="card shadow border-0 p-5">

              <h4 className="mb-4">
                Ready to Work Together?
              </h4>

              <p className="text-muted">
                Feel free to contact me for internships,
                job opportunities, freelance projects,
                or professional collaborations.
              </p>

              <div className="mt-4">

                <p>
                  <strong>Email:</strong><br />
                  sayalipawar1125@gmail.com
                </p>

                <p>
                  <strong>Phone:</strong><br />
                  +91 8169593048
                </p>

                <p>
                  <strong>Location:</strong><br />
                  Mumbai, Maharashtra, India
                </p>

              </div>

              <div className="d-flex flex-wrap gap-3 mt-4">

               

                <a
                  href="https://github.com/SayaliPawar1125"
                  target="_blank"
                  className="btn btn-dark"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/sayalipawar1125"
                  target="_blank"
                  className="btn btn-info text-white"
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;