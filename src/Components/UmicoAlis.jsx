import React from "react";
import { Link } from "react-router-dom";

function UmicoAlis() {
  return (
    <div className="main-section-three-content">
      <h2>
        Umico - alış-verişdə ol{" "}
        <img src={require("../Img/umicoMarket.png")} alt="" />
      </h2>
      <div className="main-section-three-content-categoryImg">
        <div className="main-section-three-content-categoryImg-up">
          <div className="main-section-three-content-categoryImg-up-left">
            <Link>
              <img src={require("../Img/smartfon.jpg")} alt="" />
            </Link>
          </div>
          <div className="main-section-three-content-categoryImg-up-right">
            <div className="main-section-three-content-categoryImg-up-right-up">
              <Link>
                <img src={require("../Img/iqlim.jpg")} alt="" />
              </Link>{" "}
              <Link>
                <img src={require("../Img/meiset.jpg")} alt="" />
              </Link>{" "}
              <Link>
                <img src={require("../Img/metbec.jpg")} alt="" />
              </Link>{" "}
              <Link>
                <img src={require("../Img/notbuk.jpg")} alt="" />
              </Link>
            </div>
            <div className="main-section-three-content-categoryImg-up-right-down">
              <Link>
                <img src={require("../Img/televizor.jpg")} alt="" />
              </Link>
              <Link>
                <img src={require("../Img/endirim.jpg")} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="main-section-three-content-categoryImg-down">
          <Link>
            <img src={require("../Img/qarderob.jpg")} alt="" />
          </Link>
          <Link>
            <img src={require("../Img/Etir.jpg")} alt="" />
          </Link>
          <Link>
            <img src={require("../Img/Gozellik.jpg")} alt="" />
          </Link>
          <Link>
            <img src={require("../Img/Mebel.jpg")} alt="" />
          </Link>
          <Link>
            <img src={require("../Img/AvtomobilM.jpg")} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UmicoAlis;
