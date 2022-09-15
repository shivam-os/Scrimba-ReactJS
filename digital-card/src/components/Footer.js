import React from "react";
import fbIcon from "../images/Facebook-Icon.png"
import instaIcon from "../images/Instagram-Icon.png"
import twitterIcon from "../images/Twitter-Icon.png"
import githubIcon from "../images/GitHub-Icon.png"


export default function Footer() {
  return (
    <div className="footer-section">
      <img className="footer-icon" src={twitterIcon} alt=""/>
      <img className="footer-icon" src={fbIcon} alt=""/>
      <img className="footer-icon" src={instaIcon} alt=""/>
      <img className="footer-icon" src={githubIcon} alt=""/>
    </div>
  );
}