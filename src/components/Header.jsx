import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <ul className="header-nav">
        <li>
          <Link to={"/"}>
            <img className="logo" src="./images/profile.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to={"/"}>탐색하기</Link>
        </li>
      </ul>
    </div>
  );
}
