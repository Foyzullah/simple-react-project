import { useEffect, useState } from "react";
import "./App.css";
import Player from "./components/Player/Player";
import allPlayers from "./fakeData/fakeData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "./components/Team/Team";

function App() {
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    setPlayers(allPlayers);
  }, []);

  const addButtonHandler = (playerName) => {
    const newTeam = [...team, playerName];
    setTeam(newTeam);
  };

  return (
    <div className="container padding bg">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <h2 className="title">List of players</h2>
            {players.map((player) => (
              <Player
                player={player}
                addButtonHandler={addButtonHandler}
                key={player.id}
              ></Player>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <h4 className="title">Your Team Details</h4>
          <Team team={team}></Team>
        </div>
      </div>
    </div>
  );
}

export default App;
