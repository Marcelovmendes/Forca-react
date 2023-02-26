import React from "react";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";
import Words from "./Words";

const Jogo = (props) => {
  console.log(props)
  const img = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const imgSrc= img[props.error];
  return (
    <div className="container">
      <div className="game">
      <img data-test="game-image" src={imgSrc}/>
      </div>
      <div className="sidebar">
        <button className="start" onClick={props.startgame} data-test="choose-word">
          <h1>Escolher Palavra</h1>
        </button>
        <div className="word" data-test="word">
          {props.chosenword.map((letter, i) => (
            <span key={i}>
              <Words value={letter.value.split()} ok={letter.ok} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jogo;
