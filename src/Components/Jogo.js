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
  const img = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const maxErrors= img.length
  const imgSrc= props.error < maxErrors ? img[props.error]: img[maxErrors - 1]
  const gameLost = props.error >= maxErrors;

  let wordClass = allCorrect() ? "word green" : props.gameOver ? "word red" : "word";
  function allCorrect() {
    return props.chosenWord.every((letter) => letter.ok);
  }

  if (props.gameOver && !allCorrect()) {
    wordClass += " red";
  }


  return (
    <div className="container">
      <div className="game">
      <img data-test="game-image" src={imgSrc} alt={`Forca ${props.error} de 6`}/>
      </div>
      <div className="sidebar">
        <button className="start" onClick={props.startgame} data-test="choose-word">
          <h1>Escolher Palavra</h1>
        </button>
        <div className={wordClass} data-test="word">
          {props.chosenWord.map((letter, i) => (
            <span key={i}>
              <Words value={letter.value} ok={letter.ok} shoWord={(gameLost && !letter.ok) || (!gameLost && props.gameOver && letter.ok)} gameLost={gameLost} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jogo;