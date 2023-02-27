import Letra from "./Letra";

const Letras = (props) => {
  console.log(props);
  const { activeButton, disabled, checkLetter, isLetterUsed, gameEnded } = props;
  const items = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="alphabet">
      {items.map((letter) => (
        <Letra
          key={letter}
          list={letter}
          className={activeButton}
          disabled={disabled || isLetterUsed.includes(letter) || gameEnded}
          checkLetter={() => checkLetter(letter)}
          isLetterUsed={isLetterUsed}
        />
      ))}
    </div>
  );
};
export default Letras;
