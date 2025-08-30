import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import Search from "./components/search/search";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data), setFilteredMonsters(data);
      });
  }, []);

  const onSearchHandler = (event) => {
    const searchString = event.target.value.toLowerCase();
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    );
    setFilteredMonsters(newFilteredMonsters);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Monster Rolodex</h1>
      <Search onChangeHandler={onSearchHandler} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
