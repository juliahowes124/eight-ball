import React, { useState } from 'react';

import './EightBall.css';
const initialCount = {
  'green': 0,
  'goldenrod': 0,
  'red': 0
}
const initialColor =  'black';
const initialText = 'Think of a Question';

function EightBall(props) {
  const [color, setColor] = useState(initialColor);
  const [text, setText] = useState(initialText);
  const [colorCount, setColorCount] = useState(initialCount);

  function ballClickHandler() {
    let {msg, color} = props.answers[Math.floor(Math.random() * props.answers.length)];
    setColor(color);
    setText(msg);
    setColorCount({...colorCount, [color]: colorCount[color] + 1});
  }

  function resetClickHandler() {
    setColor(initialColor);
    setText(initialText);
    
    setColorCount({...initialCount})
  }

  return (
    <div>
      <div className="EightBall-div"
        style={{ backgroundColor: color }}
        onClick={ballClickHandler}>
        {text}
      </div>
        <button onClick={ resetClickHandler }> Reset </button>
        <ul> 
          { Object.entries(colorCount)
          .map(([key, value]) => <li>{key} has been shown {+value} times</li>)}
        </ul>
    </div>
  )
}

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
}

export default EightBall;