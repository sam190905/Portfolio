import React from "react";
import "../../../public/projects.css";
function Projects(){
return <div className="projectcontainer">
    <h1 className="pro">Projects :</h1>
    <div className="projectbox">
        <div className="protile k1" >
        <a href="https://github.com/sam190905/Keep-Notes">
        <h1>Keeper Notes ✏️</h1>
        </a>
        </div>
        <div className="protile f1">
            <h1>Family Travel Tracker ✈️</h1>
        </div>
        <div className="protile a1">
            <a href="https://github.com/sam190905/Age-calculator">
            <h1>Age Calculator 📅</h1>
            </a>
        </div>
        <div className="protile">
            <p>building more...</p>
        </div>

    </div>
</div>
}

export default Projects;