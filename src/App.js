import React, { useState, useEffect, useRef } from "react";
import Quote from "./components/Quote"

function App() {

  const maxTime = 300;
  const [text, setText] = useState("");
  const [time, setTime] = useState(maxTime);
  const [gameOn, setGameOn] = useState(false);

  const textBoxRef = useRef(null);

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function handleClick() {
    setGameOn(true);
    setTime(maxTime);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  useEffect(() => {
    if (gameOn === true) {
      setTimeout(() => {
        setTime((time) => (time === 0 ? 0 : time - 1));
      }, 1000);
    }

    if (time === 0) {
      setGameOn(false);
    }
  }, [gameOn, time]);

  return (
    <div className="bg-gray-800 w-screen  h-screen">

      <Quote time={time} maxTime={maxTime}/>

      <div className=" flex justify-center items-center p-10 border-dashed-2 border-blue-600">
        <textarea
          className="text-4xl text-gray-700 bg-teal-400 border-double border-white border-8 p-2"
          ref={textBoxRef}
          onChange={handleChange}
          value={text}
          disabled={!gameOn}
        />
      </div>

      <h1 className="text-gray-200 text-center text-2xl m-2">
        Time Remaining - {time}
      </h1>
      <div className="flex justify-center">
        <button
          className="p-6 flex justify-center border-4 rounded-full bg-green-600 font-bold text-gray-100 font-mono text-xl"
          onClick={handleClick}
          disabled={gameOn}
        >
          START
        </button>
      </div>
    </div>
  );
}

export default App;
