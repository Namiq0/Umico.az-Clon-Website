import React from "react";
import { TbBackpack } from "react-icons/tb";
import { FiTruck } from "react-icons/fi";
import { AiOutlinePercentage } from "react-icons/ai";
import { Link } from "react-router-dom";

function DownPano() {
  return (
    <div className="main-setion-one-news-down-downPano">
      <div className="width">
        <Link>
          <div className="main-setion-one-news-down-downPano-background green">
            <TbBackpack />
          </div>
          <span>200 000-dən çox məhsul</span>
        </Link>
      </div>
      <div className="width">
        <Link>
          <div className="main-setion-one-news-down-downPano-background pink">
            <FiTruck />
          </div>
          <span>Pulsuz çatdırılma 40 ₼-dən</span>
        </Link>
      </div>
      <div className="width">
        <Link>
          <div className="main-setion-one-news-down-downPano-background red">
            <AiOutlinePercentage />
          </div>
          <span>Endirimlər və aksiyalar</span>
        </Link>
      </div>
      <div className="width">
        <Link>
          <div className="main-setion-one-news-down-downPano-background yellow">
            <img src={require("../Img/DownPano-1.jpg")} alt="" />
          </div>
          <span>Birbank ilə 24 ayadək taksit</span>
        </Link>
      </div>
    </div>
  );
}

export default DownPano;
