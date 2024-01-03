import "./App.css";
import { useState } from "react";

function App() {
  const [GreetingMessageInput, SetGreetingMessageInput] = useState("");
  const [onClickMessage, SetOnClickMessage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{onClickMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            SetGreetingMessageInput(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            SetOnClickMessage(GreetingMessageInput);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
