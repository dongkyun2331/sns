import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <ul className="header-nav">
        <Link to={"/"}>
          <li className="logo">
            <img src="./images/profile" alt="" />
          </li>
        </Link>
      </ul>
    </div>
  );
}
