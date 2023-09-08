import "./abilities.css";
import IconReact from "../icons/reactSvg";
import IconJavascript from "../icons/javascriptIcon";
import IconCss3 from "../icons/css3";
import IconHtml5 from "../icons/html";
import IconTailwindcss from "../icons/tailwind";
import IconBrandBootstrap from "../icons/bootstrap";

const Abilities = () => {
  function handleMouseOver() {
    let image = document.getElementById("imageTo");
    image.style.display = "block";

    setTimeout(() => {
      image.style.opacity = "1";
    }, 0);
  }

  function handleMouseLeave() {
    let image = document.getElementById("imageTo");
    image.style.opacity = "0";

    setTimeout(() => {
      image.style.display = "none";
    }, 200);
  }

  return (
    <>
      <div className="abilities">
        <p className="whatCanIdo">What can I do?</p>
        <div className="thisSite">
          <p> I am Highly capable with the following web technologies</p>
        </div>
        <div
          id="technologies"
          className="techs"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}>
          <IconReact />
          <IconJavascript />
          <IconTailwindcss />
          <IconHtml5 />
          <IconCss3 />
          <IconBrandBootstrap />
        </div>
        <div className="canDo">
          <p>
            I am also well versed in the following non web-based technologies
          </p>
          <div className="non-web">
            <div className="mainTech">Python</div>
            <div className="data">
              <div id="AiBtn" className="subTechs">
                AI
              </div>
              <div id="ApiBtn" className="subTechs">
                API&apos;s
              </div>

              <div id="GuiBtn" className="subTechs">
                GUI&apos;s
              </div>
              <div id="CliBtn" className="subTechs">
                CLI&apos;s
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Abilities;
