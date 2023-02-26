import { useState } from "react";
import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";
import palavras from "./palavras";

const App = () => {
  const [isbutton, setIsButton] = useState(true);
  const [word, setWord] = useState("");
  const [chosenword, setChosenWord] = useState([]);
  const [errors, setErrors] = useState(0);
 console.log(word)
  const handleClickButton = () => {
    setIsButton(false);
    const getword = randomWord();
    setWord(getword);
    setChosenWord(
      getword.split("").map((letter) => ({ value: letter, ok: false }))
    );
    setErrors(0);
  };
  const underline = () => {
    return <span>_</span>;
  };

  const checkLetter = (letter) => {
    let ok = false;

    const newWord = chosenword.map((l) => {
      if (l.value == letter.toLowerCase()) {
        ok = true;
        return { ...l, ok: true };
      }
      return l;
    });
    setChosenWord(newWord);
    if (!ok) {
      setErrors(errors + 1);
    }
  };
  const randomWord = () => {
    const randomIndex = Math.floor(Math.random() * palavras.length);
    const aleatoryWord = palavras[randomIndex];
    return aleatoryWord;
  };

  return (
    <>
      <Jogo
        startgame={handleClickButton}
        word={word}
        chosenword={chosenword}
        underline={underline}
        error={errors}
      />
      <Letras disabled={isbutton} checkLetter={checkLetter} />
    </>
  );
};
export default App;
