import React from "react";
import "../../../public/details.css";
function Details() {
  return (
    <div className="detailbox">
      <p className="hi">Hi, myself</p>
      <h1>SAMARTH PURANT </h1>
      <a className="location" href="https://www.google.com/maps/place/Solapur,+Maharashtra/@17.6614522,75.8362153,12z/data=!3m1!4b1!4m6!3m5!1s0x3bc5d082b54ac5d5:0x3c719de6c83710d0!8m2!3d17.6599188!4d75.9063906!16zL20vMDJucGpk?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D">
        <div >
          <p>
            <img className="locationlogo" src="/location.png"></img>{" "}
            Solapur,Maharashtra
          </p>
        </div>
      </a>
      <h2 class="prof"> I am a Web Developer!</h2>

      <p className="summary">
        Motivated and eager-to-learn Full Stack Web Developer with foundational
        knowledge in front-end and back-end technologies, including HTML, CSS,
        JavaScript, and basic frameworks like React and Node.js. Familiar with
        database management and version control using Git. Committed to
        improving coding skills and contributing to web development projects
        while collaborating with teams to create functional and responsive web
        applications. Ready to grow and take on new challenges in a professional
        development environment.
      </p>
      <a
      className="resume"
      href="./Resume.pdf"
      download="Samarth.pdf" // Specifies the file name for the downloaded file
      style={{
        textDecoration: "none",
        color: " #1e1e1e",
        backgroundColor: "#00FFFF",
        padding: "10px 20px",
        borderRadius: "5px",
        display: "inline-block",
        fontSize: "16px",
      }}
    >
      Download resume
    </a >    
    </div>
  );
}

export default Details;
