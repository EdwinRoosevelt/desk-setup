import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function FinishPage({ deskItemsData}) {
  const navigate = useNavigate();
  const imageWrapper = {
    position: "relative",
    top: 0,
    left: 0,
  };
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
    <div className="container shadow p-sm-5 p-2 ">
      <h1 className=" display-5 mb-5">Voila! Desk is Setup</h1>
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
        Things in your desk :{" "}
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

    </div>
  );
}

export default FinishPage