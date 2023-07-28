import React from "react";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../ContextApi/Context";
import { Link } from "react-router-dom";
import { TbCurrencyManat, TbShoppingCart } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { RiScales3Fill } from "react-icons/ri";
import CircularProgress from "@mui/material/CircularProgress";
import Umico from "../UmicoApi/@asgaraliyev (1).json";

function Secilmisler() {
  const { selected, setSelected, setCart } = useContext(GlobalContext);
  const [clickedItems, setClickedItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleRemove = (uuid) => {
    const indexToRemove = selected.findIndex(
      (product) => product.uuid === uuid
    );

    if (indexToRemove !== -1) {
      const updateOrders = [...selected];
      updateOrders.splice(indexToRemove, 1);
      setSelected(updateOrders);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const addToCart = (uuid) => {
    const productToAdd = Umico.find((item) => item.uuid === uuid);

    setCart((prevState) => [...prevState, productToAdd]);

    setClickedItems((prevState) => ({
      ...prevState,
      [uuid]: !prevState[uuid],
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="secilmisler">
      <h2>Seçilmişlər</h2>
      <div className="secilmisler-context">
        {selected.map((product) => (
          <div
            key={product.uuid}
            className="main-section-four-satilanlar-box-productCard"
          >
            <div className="main-section-four-satilanlar-box-productCard-all">
              <div onClick={() => handleRemove(product.uuid)}>
                <AiOutlineHeart />
              </div>
              <div>
                <RiScales3Fill />
              </div>
              <div onClick={() => addToCart(product.uuid)}>
                <TbShoppingCart
                  className={`shopping-cart-icon ${
                    clickedItems[product.uuid] ? "clicked" : ""
                  }`}
                />
              </div>
            </div>
            <Link to={`/product/${product.uuid}`}>
              <div className="main-section-four-satilanlar-box-productCard-content">
                <div className="main-section-four-satilanlar-box-productCard-content-imgdiv">
                  {isLoading ? (
                    <div className="progress-container">
                      <CircularProgress sx={{ color: "#7c62e3" }} />
                    </div>
                  ) : (
                    <img src={product.img_url_original} alt="" />
                  )}
                </div>
                <p className="main-section-four-satilanlar-box-productCard-content-price">
                  {product.retail_price}{" "}
                  <span>
                    <TbCurrencyManat />
                  </span>
                </p>
                <p className="main-section-four-satilanlar-box-productCard-content-name">
                  {product.name}
                </p>
                <p className="main-section-four-satilanlar-box-productCard-content-satici">
                  <span>Satıcı:</span>
                  {product.manufacturer}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Secilmisler;
