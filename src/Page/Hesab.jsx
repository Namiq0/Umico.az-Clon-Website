import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { RiScales3Fill, RiBankCardLine, RiNewspaperLine } from "react-icons/ri";
import { MdOutlinePortrait } from "react-icons/md";
import { AiOutlineHeart, AiOutlinePoweroff } from "react-icons/ai";

import { RxBackpack } from "react-icons/rx";
import { HiOutlineLightBulb } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

function Hesab() {
  return (
    <div className="Hesab">
      <div className="hesab-left-page">
        <h2>Şəxsi hesabım</h2>

        <div className="login-content-dropdown-section-two-sebet">
          <h3>
            <img src={require("../Img/umicoMarket.png")} alt="" />
          </h3>
          <p>
            <NavLink to={"sebet"}>
              <span>
                <RxBackpack />
              </span>
              Mənim sifarişlərim
            </NavLink>
          </p>
          <p>
            <Link>
              <span>
                <RiScales3Fill />
              </span>
              Müqayisə
            </Link>
          </p>
          <p>
            <NavLink to={"secilmisler"}>
              {" "}
              <span>
                <AiOutlineHeart />
              </span>
              Seçilmişlər
            </NavLink>
          </p>
          <p>
            <Link>
              <span>
                <SlLocationPin />
              </span>
              Mənim ünvanlarım
            </Link>
          </p>
        </div>
        <div className="login-content-dropdown-section-there-sebet">
          <h3>
            <img src={require("../Img/umicoBonus.png")} alt="" />
          </h3>
          <p>
            <Link>
              <span>
                <RiBankCardLine />
              </span>
              Mənim ID kartım
            </Link>
          </p>
          <p>
            <Link>
              <span>
                <RiNewspaperLine />
              </span>
              Əməlliyat Tarixcəsi
            </Link>
          </p>
          <p>
            <Link>
              <span>
                <HiOutlineLightBulb />
              </span>
              FAQ
            </Link>
          </p>
        </div>
      </div>
      <div className="hesab-right-page">
        <Outlet />
      </div>
    </div>
  );
}

export default Hesab;
