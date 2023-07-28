import React from "react";
import { GlobalContext } from "../ContextApi/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function AktualOlanlar() {
  const { categoriesUmico } = useContext(GlobalContext);

  const categoresImg = [
    "aktual-kisi-qol-saati.jpg",
    "ak-qadin-qol-saati.jpg",
    "ak-turizm-aletleri.jpg",
    "ak-zippo.jpg",
    "ak-usaq-saat.jpg",
    "ak-usaq-sabunu.jpg",
    "ak-dis-fircasi.jpg",
    "ak-dis-mecunu.jpg",
    "ak-body-crem.jpg",
    "ak-maye-sabun.jpg",
    "ak-qazan.jpg",
    "ak-tava.jpg",
    "ak-voklor.jpg",
  ];

  return (
    <div className="main-section-five-content">
      <h2>
        Bu gün aktual olanlar{" "}
        <img src={require("../Img/umicoMarket.png")} alt="" />
      </h2>
      <div className="main-section-five-content-box">
        {categoriesUmico.map((item, index) => {
          const CategoryImg = categoresImg[index % categoresImg.length];
          return (
            <div className="main-section-five-content-box-card">
              <Link to={`/Category/${item}`}>
                <div className="main-section-five-content-box-img">
                  <img src={require(`../Img/${CategoryImg}`)} alt="" />
                </div>
                <p>{item}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="main-section-five-box-btn">
        <div className="main-section-five-box-kecid-kecid">
          <Link to={"/CategoryMehsulCategory"}>
            <button> Məhsul kateqoriyalarına keç</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AktualOlanlar;
