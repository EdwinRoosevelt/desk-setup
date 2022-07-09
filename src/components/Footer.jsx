import React from 'react'

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="container">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="https://www.edwinroosevelt.com"
            target="_blank"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <span className="text-muted">&nbsp; &copy; 2021 Edwin Roosevelt</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer