import { useState } from "react";
import "./App.css";

function App() {
  const [data] = useState([
    "html",
    "css",
    "Java Script",
    "React.js",
    "Node.js",
    "Python",
  ]);
  const [currentValue, setcurrentValue] = useState(null);

  const handleClick = (x) => {
    setcurrentValue(x);
  };

  return (
    <div className='App'>
      <h1>Our BLOG</h1>
      <div className='container'>
        {data.map((elem) => {
          return (
            <button
              key={elem}
              onClick={() => handleClick(elem)}
              className={elem === currentValue ? "active" : ""}
            >
              {elem}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
