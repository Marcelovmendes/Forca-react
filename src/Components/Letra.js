const Letra =(props)=>{
    return(
    <button  data-test="letter" className="letterButton" onClick={props.checkLetter} disabled={props.disabled} >{props.list}</button>
    )
}
export default Letra 