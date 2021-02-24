import React  from "react";
import { useState } from 'react';
import "./index.css";

export default function NavBar() {

  const [page, setPage] = useState('HOME');

  const handleClick = (e) => {
    setPage(e.target.textContent.toUpperCase());
  }

  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
          <a onClick={handleClick}>Home</a>
          <a onClick={handleClick}>News</a>
          <a onClick={handleClick}>Contact</a>
          <a onClick={handleClick}>About</a>
      </div>

      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
          <span>{page} PAGE</span>
        </section>
      </div>
    </div>
  );
}