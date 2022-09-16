import React from "react";
import locationIcon from "../images/location-dot-solid.svg";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--image--container">
        <img className="card--locationImage" src={props.item.imageUrl} alt={`${props.item.title}`} />
      </div>
      <div className="card--content--container">
        <div className="card--content--details">
          <img className="card--locationIcon"src={locationIcon} alt="location icon" />
          <span className="card--content--location">{props.item.location}</span>
          <a className="card--content--googleMap" href={props.item.googleMapsUrl}>View on Goolge Maps</a>
        </div>
        <h3 className="card--content--heading">{props.item.title}</h3>
        <span className="card--content--dates">{`${props.item.startDate} - ${props.item.endDate}`}</span>
        <p className="card--content--description">{props.item.description}</p>
      </div>
    </div>
  );
}