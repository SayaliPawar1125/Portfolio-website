import React from 'react'



  function Skills() {
  const skills = [
  "C",
  "Python",
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "Angular",
  "React",
  "Angular Material",
  "FastAPI",
  "Django",
  "REST API",
  "MySQL",
  "SQLite",
  "GitHub"
];

  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center mb-5">
        My Skills
      </h2>

      <div className="row">
        {skills.map((skill) => (
          <div className="col-md-4 mb-4" key={skill}>
            <div className="card skill-card shadow">
              <div className="card-body text-center">
                <h5>{skill}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;