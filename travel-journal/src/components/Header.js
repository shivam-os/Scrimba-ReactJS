import React from "react";
import globeIcon from "../images/earth-asia-solid.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={globeIcon} alt="globe-icon" className="header--icon"/>
      <h1 className="header--heading">My Travel Journal</h1>
    </div>
  );
}