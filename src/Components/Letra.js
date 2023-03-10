const Letra = (props) => {
    console.log(props)
  const isLetterUsed = (letter) => (props.usedLetters || []).includes(letter);

  return (
    <button
      data-test="letter"
      className={props.className ? "letterButtonActive" : "letterButton"}
      onClick={props.checkLetter}
      disabled={props.disabled || isLetterUsed(props.list.value) || props.gameEnded}
    >
      {props.list}
    </button>
  );
};
export default Letra;
