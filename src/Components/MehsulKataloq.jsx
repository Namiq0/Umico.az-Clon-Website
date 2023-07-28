import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GlobalContext } from "../ContextApi/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiWatch } from "react-icons/fi";
import { GiWatch, GiMedicinePills, GiSaucepan } from "react-icons/gi";
import { FaUmbrellaBeach, FaPumpSoap } from "react-icons/fa";
import {
  TbLighter,
  TbDeviceWatchStats2,
  TbDental,
  TbMilk,
} from "react-icons/tb";
import { FaBaby } from "react-icons/fa";
import { BiBowlRice } from "react-icons/bi";
import { CgBowl } from "react-icons/cg";

function MehsulKataloq() {
  // context
  const { categoriesUmico } = useContext(GlobalContext);

  // iconlar
  const icons = [
    FiWatch,
    GiWatch,
    FaUmbrellaBeach,
    TbLighter,
    TbDeviceWatchStats2,
    FaBaby,
    TbDental,
    GiMedicinePills,
    TbMilk,
    FaPumpSoap,
    GiSaucepan,
    BiBowlRice,
    CgBowl,
  ];

  return (
    <div className="header_down-bar-catalog-mehsul">
      <div className="header_down-bar-catalog-mehsul-dropdownbtn">
        <div className="header_down-bar-catalog-mehsul-catogory">
          {categoriesUmico.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            const itemValue = item;
            return (
              <p key={index}>
                <Link to={`/Category/${item}`}>
                  <span>
                    {" "}
                    <IconComponent />{" "}
                  </span>
                  {item}
                </Link>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MehsulKataloq;
