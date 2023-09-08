import "./projects.css";
import WebProjects from "./projects/webProjects";
import NonWeb from "./projects/nonWebProjects";

const Projects = () => {
  function handleMouseOverWeb() {
    let elementsWeb = document.getElementsByClassName("projectsWeb");

    for (let element of elementsWeb) {
      element.style.display = "block";
      console.log("Done Web");

      setTimeout(() => {
        element.style.opacity = "1";
      }, 0);
    }

    let elementsNonWeb = document.getElementsByClassName("projectsNonWeb");

    for (let element of elementsNonWeb) {
      element.style.opacity = "0";

      setTimeout(() => {
        element.style.display = "none";
      }, 200);
    }
  }

  function handleMouseOverNonWeb() {
    let elementsNonWeb = document.getElementsByClassName("projectsNonWeb");

    for (let element of elementsNonWeb) {
      element.style.display = "block";
      console.log("Done Non Web");

      setTimeout(() => {
        element.style.opacity = "1";
      }, 0);
    }

    let elementsWeb = document.getElementsByClassName("projectsWeb");
    console.log("web removed");
    for (let element of elementsWeb) {
      element.style.opacity = "0";

      setTimeout(() => {
        element.style.display = "none";
      }, 200);
    }
  }
  return (
    <>
      <div className="projectsDecscription">
        <p className="viewText">Feel free to view some of my projects below</p>
        <div className="projects">
          <div className="webBasedProjects">
            <p className="title" onMouseEnter={handleMouseOverWeb}>
              Web Projects
            </p>
            <div className="projectsWebContainer">
              <div className="projectsWeb">
                <div>
                  <WebProjects />
                </div>
              </div>
            </div>
          </div>
          <div className="nonWebProjects">
            <p className="title" onMouseEnter={handleMouseOverNonWeb}>
              Non-Web Projects
            </p>
            <div className="projectsNonWebContainer">
              <div className="projectsNonWeb">
                <div>
                  <NonWeb />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
