import React from "react";
import globeIcon from "../images/earth-asia-solid.svg"

export default function Header() {
  return (
    <div className="header">
      <img src={globeIcon} alt="globe-icon"/>
      <h1>My Travel Journal</h1>
    </div>
  )
}