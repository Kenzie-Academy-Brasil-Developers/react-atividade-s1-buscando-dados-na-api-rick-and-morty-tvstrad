import React from "react";
import "./style.css";

const CharCard = ({ character }) => {
  return (
    <>
      {character.status === "Alive" ? (
        <div className="card">
          {character.name.length > 12 ? (
            <label>{character.name.slice(0, 12)}...</label>
          ) : (
            <label>{character.name}</label>
          )}
          <img
            className="picture"
            src={character.image}
            alt={character.name}
          ></img>
          <p>
            Origin : <br />
            {character.origin.name}
          </p>
        </div>
      ) : (
        <div className="card dead">
          {character.name.length > 12 ? (
            <label>{character.name.slice(0, 12)}...</label>
          ) : (
            <label>{character.name}</label>
          )}
          <img
            className="picture"
            src={character.image}
            alt={character.name}
          ></img>
          <p>
            Origin : <br />
            {character.origin.name}
          </p>
        </div>
      )}
    </>
  );
};

export default CharCard;

// character.status !== "Alive" ?
