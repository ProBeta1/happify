import React,{useState,useEffect} from "react";

function Quote(props){

  const [myQuote , setMyQuote] = useState("");


  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/quotes.rest/qod?language=en")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let newQuote = data.contents.quotes[0].quote;
        setMyQuote(newQuote);
      })
      .catch((err) => console.log(err));
  }, []);


  if(props.time===0){
  return(
    <h1 className="text-center font-black text-4xl font-sans text-green-300 leading-relaxed tracking-wider">
        " {myQuote} "
        <h3 className="text-2xl text-center">Good Job ^_^   How do you feel now ? Redo this if you would like to , press Start to repeat !</h3>
      </h1>
  )}
  else if(props.time === props.maxTime){
    return(
      <h1 className="text-center font-black text-4xl font-sans text-green-300 leading-relaxed tracking-wider">
        Things happen , whatever you are feeling , just type it here ! Dont think much , jot down everything .. 
        <h3 className="text-2xl text-center">Hurry up
        , you have got only 5 minutes !! Press Start to initiate.</h3>
      </h1>
    )
  }
  else{
    return(
      <div></div>
    )
  }
}

export default Quote;