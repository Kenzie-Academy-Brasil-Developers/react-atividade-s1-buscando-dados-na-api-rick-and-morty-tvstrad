import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(characterList);
  return (
    <div className="App">
      <h1> The Rick and Morty Show</h1>
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
