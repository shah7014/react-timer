import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="watch">
        <div className="box">10</div>
        <div className="box">10</div>
      </div>
      <div className="actions">
        <button className="start btn">Start</button>
        <button className="stop btn">Stop</button>
        <button className="reset btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
