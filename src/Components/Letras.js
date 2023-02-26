import Letra from "./Letra";
const Letras = (props) => {
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
        <Letra key={letter} list={letter} disabled={props.disabled} checkLetter={()=>props.checkLetter(letter)}/>
      ))}
    </div>
  );
};
export default Letras;