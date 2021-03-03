import React from "react";
import "./Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  const { name, img, age, salary, playing_role } = props.player;
  return (
    <div className="col-md-4">
      <div className="single-player">
        <img src={img} alt="" />
        <div className="more-information">
          <h5>
            Name: <span>{name}</span>
          </h5>
          <p className="info-field">
            <FontAwesomeIcon className="icon" icon={faCheckSquare} />
            Age: <span>{age}</span>
          </p>
          <p className="info-field">
            <FontAwesomeIcon className="icon" icon={faCheckSquare} />
            Playing role: <span>{playing_role}</span>
          </p>
          <p className="info-field">
            <FontAwesomeIcon className="icon" icon={faCheckSquare} />
            Salary: <span>{salary}</span>
          </p>
        </div>
        <button
          className="addButton"
          onClick={() => props.addButtonHandler(props.player)}
        >
          Add Your team
        </button>
      </div>
    </div>
  );
};

export default Player;
