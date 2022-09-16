import React from "react";
import Card from "./components/Card.js";
import Header from "./components/Header.js"
import data from "./data.js";

export default function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  });

  return (
    <div className="container">
      <Header />
      <div className="cards--container">{cards}</div>
    </div>
  );
}