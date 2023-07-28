import { useContext, useState, useEffect } from "react";
import React from "react";
import { GlobalContext } from "../ContextApi/Context";
import { AiOutlineHeart } from "react-icons/ai";
import { TbCurrencyManat } from "react-icons/tb";
import { GrClose } from "react-icons/gr";

function Sebet() {
  const { cart, setCart } = useContext(GlobalContext);


  // cart silmek
  const handleRemove = (uuid) => {
    const indexToRemove = cart.findIndex((product) => product.uuid === uuid);

    if (indexToRemove !== -1) {
      const updateOrders = [...cart];
      updateOrders.splice(indexToRemove, 1);
      setCart(updateOrders);
    }
  };

  useEffect(() => {
    const updatedCart = cart.map((product) =>
      product.quantity ? product : { ...product, quantity: 1 }
    );
    setCart(updatedCart);
  }, [cart, setCart]);

  // product ++
  const handleQuantityChange = (uuid, newQuantity) => {
    const updatedCart = cart.map((product) =>
      product.uuid === uuid ? { ...product, quantity: newQuantity } : product
    );
    setCart(updatedCart);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sebet-backgrounColor">
      <div className="sebet-name">
        <h2>Səbət</h2>
        <p>
          Səbətinizdə <span>{cart.length}</span> məhsul var
        </p>
      </div>
      <div className="sebet-product">
        <div className="sebeet-left">
          {cart.map((product) => (
            <div key={product.uuid} className="sebeet-left-product">
              <p className="sebeet-left-product-saticiSirket">
                {" "}
                Satıcı-şirkət: <p> {product.manufacturer}</p>
              </p>
              <div className="sebeet-left-product-productCart">
                <div className="sebeet-left-img">
                  <img src={product.img_url_standard} alt="" />
                </div>
                <div className="sebeet-left-product-productCart-about">
                  <p className="sebeet-left-product-productCart-about-name">
                    {product.name}
                  </p>
                  <div className="sebeet-left-product-productCart-about-secilmisler">
                    <p className="sebeet-left-product-productCart-about-secilmisler-size">
                      {" "}
                      <span>
                        {" "}
                        <AiOutlineHeart />
                      </span>
                      Seçilmişlərə əlavə et
                    </p>
                    <p className="sebeet-left-product-productCart-about-retail-price">
                      {product.retail_price}{" "}
                      <span>
                        <TbCurrencyManat />
                      </span>
                    </p>
                    <p className="taksitli-odenis bacgrounColorTaksitliOdenis">
                      <span className="taksitli-odenis-span   ">
                        Taksitli ödəniş
                      </span>{" "}
                      {(
                        parseFloat(product.retail_price * product.quantity) / 18
                      ).toFixed(1)}{" "}
                      <span className="taksitli-odenis-span-two">
                        <TbCurrencyManat />
                      </span>{" "}
                      <span>x 18 ay </span>
                    </p>
                  </div>
                </div>

                <div className="sebeet-left-product-others">
                  <div>
                    <button
                      onClick={() =>
                        handleQuantityChange(product.uuid, product.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button>{product.quantity}</button>
                    <button
                      onClick={() =>
                        handleQuantityChange(product.uuid, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button
                      className="sebeet-left-product-others-btn"
                      onClick={() => handleRemove(product.uuid)}
                    >
                      <span>
                        <GrClose />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="sebeet-left-product-productCart-down">
                <p>
                  {" "}
                  Ümumi qiymət:{" "}
                  <span>
                    {(product.retail_price * product.quantity).toFixed(1)}
                  </span>
                  <span>
                    <TbCurrencyManat />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sebet;
