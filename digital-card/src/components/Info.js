import React from "react"
import userPic from "../images/professional-woman.jpg"

export default function Info() {
  return (
    <div className="info-section">
      <img src={userPic} alt="lauren-smith"/>
      <h1 className="info-name">Lauren Smith</h1>
      <p className="info-position">Frontend Developer</p>
      <p className="info-website">laurensmith.website</p>
      <div>
        <button className="info-button email">
          <i className="fa fa-envelope"></i>Email
          </button>
        <button className="info-button linkedin">
          <i className="fa fa-linkedin"></i>LinkedIn
          </button>
      </div>
    </div>
  );
}