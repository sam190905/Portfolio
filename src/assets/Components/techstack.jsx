import React from "react";
import '../../../public/techstack.css'; // Ensure the CSS is in the public folder, but this approach isn't ideal (explained below).

function Techstack() {
  return (
    <div className="ts">
      <h1 className="techstack pulser">TechStack</h1>
      <div className="logocontainer">
        <a href="https://react.dev/learn">
          <img className="techlogo" src="/atom.png" alt="Tech Stack Logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
          <img className="techlogo" src="/html-5.png" alt="HTML Logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <img className="techlogo" src="/css-3.png" alt="CSS Logo" />
        </a>
        <br />
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <img className="techlogo" src="/js.png" alt="JavaScript Logo" />
        </a>
        <a href="https://www.postgresql.org/docs/">
          <img className="techlogo" src="/postgresql.png" alt="PostgreSQL Logo" />
        </a>
        <a href="https://learn.microsoft.com/en-us/cpp/c-language?view=msvc-160">
          <img className="techlogo" src="/c-.png" alt="C++ Logo" />
        </a>
      </div>
    </div>
  );
}

export default Techstack;
