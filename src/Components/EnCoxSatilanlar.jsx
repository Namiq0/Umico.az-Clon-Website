import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { GlobalContext } from "../ContextApi/Context";

import Umico from "../UmicoApi/@asgaraliyev (1).json";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { TbCurrencyManat, TbShoppingCart } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { RiScales3Fill } from "react-icons/ri";
function EnCoxSatilanlar() {
  const [isLoading, setIsLoading] = useState(true);

  const [clickedItems, setClickedItems] = useState({});
  const [clickedSelect, setClickedSelect] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // sebet
  const { setCart, setSelected } = useContext(GlobalContext);

  const addToCart = (uuid) => {
    const productToAdd = Umico.find((item) => item.uuid === uuid);

    setCart((prevState) => [...prevState, productToAdd]);

    setClickedItems((prevState) => ({
      ...prevState,
      [uuid]: !prevState[uuid],
    }));
  };

  // secilmisler
  const addToSelected = (uuid) => {
    const productToSelected = Umico.find((item) => item.uuid == uuid);
    setSelected((prevState) => [...prevState, productToSelected]);
    setClickedSelect((prevState) => ({
      ...prevState,
      [uuid]: !prevState[uuid],
    }));
  };

  return (
    <div className="main-section-four-satilanlar">
      <h2>
        {" "}
        Ən çox satılanlar
        <img src={require("../Img/umicoMarket.png")} alt="" />
      </h2>
      <div className="main-section-four-satilanlar-box">
        {Umico.slice(0, 15).map((item) => (
          <div
            key={item.uuid}
            className="main-section-four-satilanlar-box-productCard"
          >
            <div className="main-section-four-satilanlar-box-productCard-all">
              <div
                onClick={() => addToSelected(item.uuid)}
                className={`shopping-cart-icon ${
                  clickedSelect[item.uuid] ? "clicked" : ""
                }`}
              >
                <AiOutlineHeart />
              </div>
              <div>
                <RiScales3Fill />
              </div>
              <div onClick={() => addToCart(item.uuid)}>
                <TbShoppingCart
                  className={`shopping-cart-icon ${
                    clickedItems[item.uuid] ? "clicked" : ""
                  }`}
                />
              </div>
            </div>
            <Link to={`/product/${item.uuid}`}>
              <div className="main-section-four-satilanlar-box-productCard-content">
                <div className="main-section-four-satilanlar-box-productCard-content-imgdiv">
                  {isLoading ? (
                    <div className="progress-container">
                      <CircularProgress sx={{ color: "#7c62e3" }} />
                    </div>
                  ) : (
                    <img src={item.img_url_original} alt="" />
                  )}
                </div>
                <p className="main-section-four-satilanlar-box-productCard-content-price">
                  {item.retail_price}{" "}
                  <span>
                    <TbCurrencyManat />
                  </span>
                </p>
                <p className="main-section-four-satilanlar-box-productCard-content-name">
                  {item.name}
                </p>
                <p className="main-section-four-satilanlar-box-productCard-content-satici">
                  <span>Satıcı:</span>
                  {item.manufacturer}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="main-section-four-satilanlar-kecid">
        <Link to={"/CategoryMehsulCategory"}>
          <button> Məhsul kateqoriyalarına keç</button>
        </Link>
      </div>
    </div>
  );
}

export default EnCoxSatilanlar;
