import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //setIsEditing(!isEditing); //this syntax inverts the value
    setIsEditing((prevState) => !prevState); // best way to update state based on prev state
  }

  function handleChange(e){
    setName(e.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required value={name} onChange={handleChange}></input>;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
