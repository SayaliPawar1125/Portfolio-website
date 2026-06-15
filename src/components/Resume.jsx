import React from 'react'

import resume from "../assets/Resume.pdf";

function Resume() {
  return (
    <section className="container mt-5">
      <h2>Resume</h2>

      <a
        href={resume}
        download
        className="btn btn-success"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
