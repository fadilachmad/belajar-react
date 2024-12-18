import { useState } from "react";
import Header from "./components/header";

function App() {
  const students = ["ayo", "ganyang", "fufufafa"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <>
      <Header name="react2.png" />
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>

      <button
        className="bg-blue-500 py-2 px-3 rounded-lg m-5 hover:bg-blue-700"
        onClick={handleClick}
      >
        Like ({likes})
      </button>
    </>
  );
}

export default App;
