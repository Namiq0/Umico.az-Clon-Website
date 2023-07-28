import React from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../ContextApi/Context";
import Umico from "../UmicoApi/@asgaraliyev (1).json";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { RiScales3Fill } from "react-icons/ri";
import {
  TbCurrencyManat,
  TbTruckDelivery,
  TbShoppingCart,
} from "react-icons/tb";
import { AiOutlineHeart, AiOutlinePercentage } from "react-icons/ai";
import { LuCar } from "react-icons/lu";
import { BsBoxSeam, BsCashCoin, BsCreditCard2Back } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";

function Product() {
  const { uuid } = useParams();

  const [clickedItems, setClickedItems] = useState({});
  const [clickedSelect, setClickedSelect] = useState({});

  const { setCart, setSelected } = useContext(GlobalContext);

  const addToCart = (uuid) => {
    const productToAdd = Umico.find((item) => item.uuid === uuid);

    setCart((prevState) => [...prevState, productToAdd]);

    setClickedItems((prevState) => ({
      ...prevState,
      [uuid]: !prevState[uuid],
    }));
  };

  const addToSelected = (uuid) => {
    const productToSelected = Umico.find((item) => item.uuid == uuid);
    setSelected((prevState) => [...prevState, productToSelected]);
    setClickedSelect((prevState) => ({
      ...prevState,
      [uuid]: !prevState[uuid],
    }));
  };

  const product = Umico.filter((item) => item.uuid === uuid);

  const imgProduct = product[0].img_urls_secondary;

  const featuresProduct = product[0].custom_fields;

  const [selectedimg, setSelectedImg] = useState("");

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setSelectedImg("");
    setActiveIndex(0);
  }, [uuid]);
  useEffect(() => {
    const product = Umico.find((item) => item.uuid === uuid);
    if (product && product.img_urls_secondary.length > 0) {
      setSelectedImg(product.img_urls_secondary[0]);
    }
  }, [uuid]);

  const handleImg = (img, index) => {
    return setSelectedImg(img), setActiveIndex(index);
  };

  //  sehifenin basdan baslamasi ucun
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //
  const price = product.map((price) => price.retail_price);
  const [taksit, setTaksit] = useState(parseFloat(price) / 18);

  const taksitFixed = taksit.toFixed(0);

  const [xususiyyetler, setXususiyyetler] = useState(true);
  const [tesvir, setTesvir] = useState(true);

  const ummumi = () => {
    return setXususiyyetler(true), setTesvir(true);
  };
  const xususiyyetN = () => {
    return setXususiyyetler(true), setTesvir(false);
  };
  const tesvirN = () => {
    return setXususiyyetler(false), setTesvir(true);
  };
  const [axsar, setaxsar] = useState(product[0].manufacturer);
  const otherProducts = Umico.filter(
    (item) => item.manufacturer === axsar && item.uuid !== uuid
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="product-page">
      <div className="product-page-product-cart">
        <div className="product-page-product-cart-img">
          <div className="product-page-product-cart-img-mini">
            {imgProduct.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => handleImg(img, index)}
                className={activeIndex === index ? "activeBorder" : ""}
              />
            ))}
          </div>
          <div className="product-page-product-cart-img-big">
            <img src={selectedimg} alt="" />
            <div className="product-page-product-cart-img-big-taksit">
              <img src={require("../Img/birCredit.png")} alt="" />
              <p>
                18 aylıq <br /> <span>taksit</span>
              </p>
            </div>
          </div>
        </div>
        <div className="product-page-product-cart-information">
          {product.map((item) => (
            <>
              <h2>{item.name}</h2>
              <div className="product-page-product-cart-information-mehsul-cod">
                <p>Məhsulun kodu:{item.variant_code} </p>
                <span className="">
                  <AiOutlineHeart />
                </span>
                <p> Seçilmişlərə əlavə et</p>
                <span>
                  {" "}
                  <RiScales3Fill />
                </span>
                <p> Müqayisəyə əlavə et</p>
              </div>
              <div className="product-page-product-cart-information-img">
                <img src={require("../Img/p-reklam.jpg")} alt="" />
              </div>
              <p className="retail-price">
                {item.retail_price}{" "}
                <span>
                  <TbCurrencyManat />
                </span>
              </p>
              <div>
                <p className="taksitli-odenis">
                  <img src={require("../Img/p-kart.jpg")} alt="" />
                  <span className="taksitli-odenis-span">
                    Taksitli ödəniş
                  </span>{" "}
                  {taksitFixed}{" "}
                  <span className="taksitli-odenis-span-two">
                    <TbCurrencyManat />
                  </span>{" "}
                  <span>x 18 ay </span>
                </p>
              </div>
            </>
          ))}
          <div className="product-page-product-cart-information-buttons">
            {" "}
            <button onClick={addToCart}> Səbətə əlavə etmək</button>
            <button>Kreditlə almaq</button>
            <button>Bir kliklə almaq</button>
          </div>
        </div>
        <div className="product-page-product-cart-other">
          <div className="product-page-product-cart-other-section-up">
            <h3>Çatdırılma</h3>
            <div>
              <Link>
                <span>
                  <LuCar />
                </span>
                <span>Kuryer ilə</span>
              </Link>
            </div>
            <div>
              <Link>
                <span>
                  <BsBoxSeam />
                </span>
                <span>Özünüz götürdükdə</span>
              </Link>
            </div>
            <div>
              <Link>
                <span>
                  <TbTruckDelivery />
                </span>
                <span>Expres çatdırılma</span>
              </Link>
            </div>
            <div>
              <Link>
                <span>
                  <SlEnvolopeLetter />
                </span>
                <span>Azərpoçt şöbələrinə çatdırılma</span>
              </Link>
            </div>
          </div>
          <div className="product-page-product-cart-other-section-down">
            <h3>Ödəmə</h3>
            <div>
              <Link>
                <span>
                  <BsCashCoin />
                </span>
                <span>Nəğd </span>
              </Link>
            </div>
            <div>
              <Link>
                <span>
                  <BsCreditCard2Back />
                </span>
                <span>Bank kartı ilə</span>
              </Link>
            </div>
            <div>
              <Link>
                <span>
                  <AiOutlinePercentage />
                </span>
                <span>Kreditlə</span>
              </Link>
            </div>
            <div>
              <Link>
                <img src={require("../Img/birCredit.png")} alt="" />
                <span>Birbank kartları ilə taksit</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="product-page-xususiyyetler-background">
        <div className="product-page-xususiyyetler">
          <div className="product-page-xususiyyetler-navbar">
            <p onClick={() => ummumi()}>Ümumi təsvir</p>
            <p onClick={() => xususiyyetN()}>Xüsusiyyətlər</p>
            <p onClick={() => tesvirN()}>Təsvir</p>
            <div className="product-page-xususiyyetler-navbar-link">
              <Link> Zəmanət</Link>
              <Link> Qaytarılma</Link>
            </div>
          </div>
          {xususiyyetler && (
            <div className="product-page-xususiyyetler-body">
              <h2>Xüsusiyyətlər</h2>
              <div className="product-page-xususiyyetler-body-content">
                <div className="product-page-xususiyyetler-body-left">
                  {featuresProduct
                    .slice(0, featuresProduct.length / 2)
                    .map((product, index) => (
                      <div key={index}>
                        <span>{product.name}:</span>
                        <span>{product.values}</span>
                      </div>
                    ))}
                </div>
                <div className="product-page-xususiyyetler-body-right">
                  {featuresProduct
                    .slice(
                      featuresProduct.length / 2,
                      featuresProduct.length - 1
                    )
                    .map((product, index) => (
                      <div key={index}>
                        <span>{product.name}:</span>
                        <span>{product.values}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
          {tesvir && (
            <div className="product-page-xususiyyetler-tesvir">
              <h2>Təsvir</h2>
              <div className="product-page-xususiyyetler-tesvir-body">
                {product.map((product) => (
                  <p>
                    {product.description_ru
                      ? product.description_ru
                      : "Bu məhsul haqqında açıqlama yoxdur "}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="product-page-semProducts">
        <div className="main-section-four-satilanlar-box">
          {otherProducts.map((item) => (
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
      </div>
    </div>
  );
}

export default Product;
