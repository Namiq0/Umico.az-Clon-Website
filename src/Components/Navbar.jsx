import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header-navbar">
      <ul>
        <li>
          <Link>Umico Bonus loyallıq proqramı</Link>
        </li>
        <li>
          <Link>Çatdırılma və ödəmə</Link>
        </li>
        <li>
          <Link>Qaytarılma</Link>
        </li>
        <li>
          <Link>Zəmanət</Link>
        </li>
        <li>
          <Link className="navbar-satis">Umico Market-də satın</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
