import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import CardWrapper from "./wrapper/CardWrapper"

function HomePage() {
  const navigate = useNavigate()

  return (
    <CardWrapper title="Let's setup the desk" cardMaxWidth="700px">
      <p className="fs-6 mb-3">
        Achieve the mindspace you need to work by making a small change to your
        room
      </p>
      <div className="card shadow mb-5">
        <img
          src="images/empty-desk.jpg"
          className="card-img-top"
          alt="empty-desk"
        />
      </div>


        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button" onClick={() => navigate("/select")}>
            Get Started!
          </button>
        </div>

    </CardWrapper>
  );
}

export default HomePage