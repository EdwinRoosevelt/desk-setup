import React from 'react'

function CardWrapper(props) {

  const cardStyle = {
    borderRadius: "20px",
    maxWidth: `${props.cardMaxWidth}`
  }

  return (
    <div
      className="container shadow p-sm-5 p-2"
      style={cardStyle}
    >
      <h1 className=" display-5">{props.title}</h1>
      {props.children}
    </div>
  );
}

export default CardWrapper