
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [count,setCount] = useState(1);
  return (
        <div>
        <p> Button clicked {count} times</p>
        <button onClick={() => setCount(count = count+1)}>click me</button>
    </div>
  )
}

export default App
