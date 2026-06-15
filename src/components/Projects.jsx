import React from "react";

function Projects() {
  const projects = [
    {
      title: "Volunteer Registration System",
      tech: "Angular, FastAPI, SQLite",
      description:
        "Built a full-stack web application for volunteer and event management. Developed RESTful APIs, implemented CRUD operations, form validation, and responsive user interfaces using Angular Material."
    },
    {
      title: "Intranet Communication System",
      tech: "Python, Tkinter, SQLite",
      description:
        "Developed a LAN-based desktop email system with secure messaging, user authentication, file sharing, and database integration. Applied OOP concepts and client-server architecture."
    },
    {
      title: "Portfolio Website",
      tech: "React, Bootstrap, Vite",
      description:
        "Designed and developed a responsive personal portfolio website using React and Bootstrap. Implemented lazy loading, responsive layouts, and modern UI design principles."
    }
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          My Projects
        </h2>

        <div className="row">
          {projects.map((project, index) => (
            <div
              className="col-lg-4 col-md-6 mb-4"
              key={index}
            >
              <div className="card shadow h-100 project-card">
                <div className="card-body">
                  <h4 className="mb-3">
                    {project.title}
                  </h4>

                  <p className="text-primary fw-bold">
                    {project.tech}
                  </p>

                  <p>
                    {project.description}
                  </p>
                </div>

                <div className="card-footer bg-white border-0">
                
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;