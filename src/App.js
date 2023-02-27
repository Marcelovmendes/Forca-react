import { useState } from "react";
import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";
import palavras from "./palavras";

const App = () => {
  const [isbutton, setIsButton] = useState(true);
  const [chosenWord, setChosenWord] = useState([]);
  const [errors, setErrors] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showWord, setShowWord] = useState(false);
  const [clickedLetters, setClickedLetters] = useState([]);
  const [buttonON, setButtonON] = useState(false);
  const [usedLetters, setUsedLetters] = useState([]);
  const [gameEnded,setGameEnded]= useState(false)
  console.log(chosenWord);

  const handleClickButton = () => {
    setIsButton(false);
    const getword = randomWord();
    setChosenWord(
      getword.split("").map((letter) => ({ value: letter, ok: false }))
    );
    setErrors(0);
    setGameOver(false);
    setGameWon(false);
    setShowWord(false);
    setButtonON(true);
    setGameEnded(false);

    
  };

  const checkLetter = (letter) => {
    let ok = false;
    const newWord = chosenWord.map((l) => {

      if (l.value === letter) {
        ok = true;
        return { ...l, ok: true };
      }
      return l;
    });
    setChosenWord(newWord);
    if (!ok) {
      setErrors(errors + 1);
    }
    setClickedLetters([...clickedLetters, letter]);
    setUsedLetters([...usedLetters, letter]);
    checkGame();
  };
   

  const randomWord = () => {
    const randomIndex = Math.floor(Math.random() * palavras.length);
    const aleatoryWord = palavras[randomIndex];
    setUsedLetters([]);
    return aleatoryWord;
  };

  const checkGame = () => {
    let allCorrect = chosenWord.every((letter) => letter.ok);
    if (allCorrect) {
      setGameWon(true);
      setGameEnded(true)
    } else if (errors >= 6) {
      setGameOver(true);
      setShowWord(true);
      setGameEnded(true)
    }
  };

  return (
    <>
      <Jogo
        startgame={handleClickButton}
        chosenWord={chosenWord}
        error={errors}
        gameOver={gameOver}
        gameWon={gameWon}
        showWord={showWord}
      />
      <Letras
        activeButton={buttonON}
        disabled={isbutton}
        checkLetter={checkLetter}
        checkGame={checkGame}
        isLetterUsed={usedLetters}
        clickedLetters={clickedLetters}
        gameEnded={gameEnded}
      />
    </>
  );
};

export default App;
