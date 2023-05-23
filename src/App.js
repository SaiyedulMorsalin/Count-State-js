import  {useState}  from "react";
import './App.css';






function ClickCounter() {
  const clickStyle ={
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    borderRadius: "20px",
    margin: "10px",
    width: "200px",
    height: "200px",
    textAlign: "center"
  }
  const countStyle = {
    backgroundColor: "aqua",
    color: "black",
    borderRadius: "50%",
    padding: "5px",
    marginTop: "20px"
    
  }

  const [count, setCount] = useState(0);
  const clickHandler = () => setCount(count +1);
  return (
    <div style ={clickStyle}>
      <h1>Number of click <span style={countStyle}>{count}</span></h1>
      <button style={countStyle} onClick ={clickHandler}>Click Me</button>
    </div>

)

}




function App() {
  return (
    <div className="App">
      <h1>This is count component</h1>
     <ClickCounter></ClickCounter>
    </div>
  );
}

export default App;
