import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";
/* exportamos los datos del archivo data.js */
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  /* mapeamos los datos en una funcion que devuelve la Card ya formada */
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
