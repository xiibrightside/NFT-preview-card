import { useState } from "react";
import "./App.css";
import equi from "./images/image-equilibrium.jpg";
import iconeth from "./images/icon-ethereum.svg";
import iconclock from "./images/icon-clock.svg";
import avatar from "./images/image-avatar.png";
import prev from "./images/icon-view.svg";

function App() {
  const [isPrev, setIsPrev] = useState(false);

  const Preview = () => {
    return (
      <div onMouseLeave={() => setIsPrev(false)} className="prev">
        <img className="preview" src={prev} alt="preview"></img>
      </div>
    );
  };

  return (
    <body>
      <div className="card">
        <div className="heroimgs">
          <img
            onMouseOver={() => setIsPrev(true)}
            className="equi mx-auto"
            src={equi}
            alt="equilibrium"
          ></img>
          {isPrev && <Preview />}
        </div>
        <h1>
          <a className="equititle" href="#0">
            Equilibrium #3429
          </a>
        </h1>
        <p className="details">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="ethinfo">
          <img className="iconeth" src={iconeth} alt="ethereum"></img>
          <h2>0.041 ETH</h2>
          <img className="iconclock" src={iconclock} alt="clock"></img>
          <p className="days">3 days left</p>
        </div>
        <div className="rect mx-auto"></div>
        <div className="creator">
          <img className="avatar" src={avatar} alt="avatar"></img>
          <p id="creator">
            Creation of{" "}
            <a className="jules" href="#0">
              Jules Wyvern
            </a>
          </p>
        </div>
      </div>
    </body>
  );
}

export default App;
