import { useState } from "react";
import "./App.css";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [userText, setTextInput] = useState("");

  const newText = (text) => {
    setTextInput(text.target.value);
  };

  const newGreetingMessage = () => {
    setGreetingMessage(userText);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={newText} />
      </div>

      <div className="buttons">
        <button onClick={newGreetingMessage}>Update text</button>
      </div>
    </div>
  );
}

export default App;
