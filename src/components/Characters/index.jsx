import React from "react";
import CharCard from "../CharCard";
import "./style.css";

const Characters = ({ characterList }) => {
  return (
    <div className="container">
      {characterList.map((character) => (
        <CharCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
