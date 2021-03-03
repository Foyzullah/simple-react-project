import React from "react";
import "./Team.css";

const Team = (props) => {
  const team = props.team;
  const totalBudget = team.reduce(
    (total, player) => total + parseInt(player.salary),
    0
  );
  return (
    <div>
      <table>
        <tr>
          <th>Player Name</th>
          <th>Salary</th>
        </tr>
        {team.map((playerInfo) => (
          <tr>
            <th>{playerInfo.name}</th>
            <th>{playerInfo.salary}</th>
          </tr>
        ))}
      </table>
      <table>
        <tr>
          <th>Total Budget:</th>
          <th>{totalBudget}</th>
        </tr>
      </table>
    </div>
  );
};

export default Team;
