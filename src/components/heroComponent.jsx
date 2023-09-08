import "./hero.css";
import jscode from "../icons/jscode.png";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="main">
          <header className="headerName">Shaharyar</header>
          <div className="divider" />
          <p className="subheaderPlace">Student at PakTurk</p>
        </div>
        <div className="about">
          <p className="aboutMe">
            Hello and Welcome to my Profile! I am a student at Pakturk Maarif
            Intl. School, I am studying to become a software developer. <br />
            <br />
          </p>
          <span className="siteInfo">This site was made with React JSX</span>
        </div>
        <div id="imageTo" className="image hidden">
          <img src={jscode} alt="" />
        </div>
      </div>
    </>
  );
};
export default Home;
