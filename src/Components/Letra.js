const Letra =(props)=>{ 
  
    console.log(props);
    return(
    <button  data-test="letter" className={props.className? "letterButtonActive" : "letterButton"} onClick={props.checkLetter} disabled={props.disabled} >{props.list}</button>
    )
}
export default Letra 