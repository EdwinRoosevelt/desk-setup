import React from 'react'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="card mt-5 shadow">
      <img
        src="images/empty-desk.jpg"
        className="card-img-top"
        alt="empty-desk"
      />
      <div className="card-body">
        <p className="card-text">
          Achieve the mindspace you need to work by making a small change to
          your room
        </p>

        <Link to="/select">
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">
              Get Started!
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage