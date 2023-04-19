import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <ul className="header-nav">
        <Link to={"/"}>
          <li>
            <img className="logo" src="./images/profile.png" alt="" />
          </li>
        </Link>
      </ul>
    </div>
  );
}
