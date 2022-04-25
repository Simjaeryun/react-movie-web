import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray])
    setToDo("")
  }
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <h1>My To Dos {toDos.length}</h1>
        <input
          type="text"
          placeholder="Write your to do..."
          value={toDo}
          onChange={onChange}
        />
        <button >Add To Do</button>
        <hr />
        <ul>
          {toDos.map((el, idx) => {
            return (
              <li key={idx}>{el}</li>
            )
          })}
        </ul>
      </form>


    </div>
  );
}

export default App;
