import React from "react"
import userPic from "../images/professional-woman.jpg"

export default function Info() {
  return (
    <div className="info-section">
      <img src={userPic}/>
      <h1 className="info-name">Lauren Smith</h1>
      <p className="info-position">Frontend Developer</p>
      <p className="info-website">laurensmith.website</p>
      <div>
        <button className="info-button email">
          <i class="fa fa-envelope"></i>Email
          </button>
        <button className="info-button linkedin">
          <i class="fa fa-linkedin"></i>LinkedIn
          </button>
      </div>
    </div>
  );
}