import React from 'react'
import { Link } from "react-router-dom";
import CardWrapper from "./wrapper/CardWrapper"

function HomePage() {
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

      <Link to="/select">
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">
            Get Started!
          </button>
        </div>
      </Link>
    </CardWrapper>
  );
}

export default HomePage