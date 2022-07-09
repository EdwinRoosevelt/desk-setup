import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import CardWrapper from "./wrapper/CardWrapper";

function FinishPage({ deskItemsData}) {
  const navigate = useNavigate();
  const [isAssembledItemsEmpty, setIsAssembledItemsEmpty] = useState(false)

  useEffect(() => {
    const assembledItems = deskItemsData.filter(item => item.isAssembled)
    if (Object.keys(assembledItems).length === 0)
      setIsAssembledItemsEmpty(true);
  },[])

  const baseimage = {
    position: "relative",
    top: 0,
    left: 0,
  };
  const overlayimages = {
    position: "absolute",
    top: 0,
    left: 0,
  };

  function refreshHandler() {
    navigate("/");
    window.location.reload();
  }

  return (
    <CardWrapper
      title={isAssembledItemsEmpty ? "Oops! your desk is Empty" : "Voila! your desk is Setup"}
      cardMaxWidth="700px"
    >
      <div className="card">
        <img
          src="images/empty-desk.jpg"
          className="card-img-top"
          alt="desk"
          style={baseimage}
        />
        {deskItemsData.map((deskItem) => (
          <>
            {deskItem.isAssembled && (
              <img
                src={`images/${deskItem.itemName
                  .toLowerCase()
                  .replace(" ", "")}-only.png`}
                className="card-img-top"
                alt={deskItem.itemName}
                style={overlayimages}
              />
            )}
          </>
        ))}
      </div>

      <p className="fs-5 mt-3">
        Things on your desk :
        {isAssembledItemsEmpty && (
          <span className="badge bg-primary mx-2">None</span>
        )}
        {deskItemsData.map((deskItem) => (
          <>
            {deskItem.isAssembled && (
              <span className="badge bg-primary mx-2">{deskItem.itemName}</span>
            )}
          </>
        ))}
      </p>

      <div className="d-grid gap-2 mt-5">
        <button
          className="btn btn-primary"
          type="button"
          onClick={refreshHandler}
        >
          Try Again
        </button>
      </div>
    </CardWrapper>
  );
}

export default FinishPage