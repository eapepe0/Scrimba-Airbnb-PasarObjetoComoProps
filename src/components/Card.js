import React from "react";

export default function Card(props) {
  console.log(props);
  let textoPlaca = "";
  /* variable vacia */
  if (props.item.openSpots === 0) {
    /* si openSports es 0 */
    textoPlaca = "SOLD OUT";
    /* mostramos el texto VENDIDO */
  } else if (props.item.location === "Online") {
    /* si la locacion es online */
    textoPlaca = "ONLINE";
    /* mostramos texto online */
  }

  return (
    <div className="card">
      {/* condicional rendering */}
      {textoPlaca && <div className="card--badge">{textoPlaca}</div>}
      {/* si la variable texto placa tiene algun valor , renderiza el cartelito con el texto
       que pusimos con los if en textoPlaca*/}

      <img
        src={`../images/${props.item.coverImg}`}
        alt="img_profile"
        className="card--image"
      />
      <div className="card--stats">
        <img
          src="../images/star.png"
          alt="star review"
          className="card--star"
        />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
