import React from 'react'
import { Link } from "react-router-dom";



function SelectPage({ deskItemsData, handleItemSelection }) {
  const unselectedCard = {
    width: "300px"
  }
  const selectedCard = {
    width: "300px",
    border: "3px solid rgb(94, 203, 223)",
  };

  return (
    <div className="container shadow p-sm-5 p-2 ">
      <h1 className=" display-5 mb-5">Choose Items for the desk</h1>
      <div
        className="row flex-nowrap gap-3 p-3"
        style={{ overflowX: "scroll" }}
      >
        {deskItemsData.map((deskItem) => (
          <div
            key={deskItem.id}
            className="card shadow px-0"
            style={deskItem.isSelected ? selectedCard : unselectedCard}
          >
            <img
              src={`images/${deskItem.itemName
                .toLowerCase()
                .replace(" ", "")}.jpg`}
              className="card-img-top"
              alt={`${deskItem.itemName}`}
            />
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-end justify-content-between">
                <h5 className="card-title">{deskItem.itemName}</h5>

                {deskItem.isSelected ? (
                  <i
                    type="button"
                    onClick={() => {
                      handleItemSelection(deskItem.id);
                    }}
                    className="bi bi-check2-square"
                    style={{ color: "rgb(94, 203, 223)", fontSize: "30px" }}
                  ></i>
                ) : (
                  <i
                    type="button"
                    onClick={() => {
                      handleItemSelection(deskItem.id);
                    }}
                    className="bi bi-app"
                    style={{ color: "#CFD2CF", fontSize: "30px" }}
                  ></i>
                )}
              </div>

              <p className="card-text mt-1">{deskItem.description}</p>
              <div className="d-grid gap-2 mt-auto">
                {/* <button
                  className={`btn  ${
                    deskItem.isSelected
                      ? "btn-primary text-white"
                      : "btn-outline-primary"
                  }`}
                  type="button"
                  onClick={() => {
                    handleItemSelection(deskItem.id);
                  }}
                >
                  {deskItem.isSelected ? "unselect" : "select"}
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/assemble">
        <div className="d-grid gap-2 mt-5">
          <button className="btn btn-primary" type="button">
            Continue
          </button>
        </div>
      </Link>
    </div>
  );
}

export default SelectPage