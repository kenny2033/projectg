import React from "react";

export default function Die({ value, isHeld, holdDice }) {
  return (
    <div className={`die-face ${isHeld ? "held" : ""}`} onClick={holdDice}>
      <h2 className="die-value">{value}</h2>
    </div>
  );
}
