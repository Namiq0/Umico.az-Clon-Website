import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import Umico from "../UmicoApi/@asgaraliyev (1).json";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { GlobalContext } from "../ContextApi/Context";

import { IoIosArrowDown } from "react-icons/io";
import { TbBuildingCircus, TbShoppingCart } from "react-icons/tb";
import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import {
  RiGamepadFill,
  RiScales3Fill,
  RiBankCardLine,
  RiNewspaperLine,
} from "react-icons/ri";
import { MdCastForEducation, MdOutlinePortrait } from "react-icons/md";
import { AiFillCar, AiOutlineHeart, AiOutlinePoweroff } from "react-icons/ai";
import {
  GiMeal,
  GiConverseShoe,
  GiDelicatePerfume,
  GiBabyBottle,
  GiSofa,
  GiCommercialAirplane,
  GiShoppingBag,
} from "react-icons/gi";
import { RxBackpack } from "react-icons/rx";
import { HiOutlineLightBulb } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { FiWatch, FiSearch } from "react-icons/fi";
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
import { Badge } from "@mui/material";

function Header() {
  const { categoriesUmico, cart, selected } = useContext(GlobalContext);

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
  // context
  const { register } = useContext(GlobalContext);

  // dropdown_sirket
  const [arrow, setArrow] = useState(false);
  const dropdownRef = useRef(null);

  // dropdown catalog
  const [categoryUmico, setCategoryUmico] = useState(false);
  const dropdownCategoryRef = useRef(null);

  // dropdown phone_number
  const [phoneNumberArrow, setPhoneNumberArrow] = useState(false);
  const phoneNumberRef = useRef(null);

  // dropdown log in
  const [loginArrow, setLoginArrow] = useState(false);
  const loginRef = useRef(null);
  // dropdown_sirket open-close function start

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setArrow(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const dropDown = () => {
    setArrow((prevArrow) => !prevArrow);
  };

  // dropdown_sirket open-close function end

  // dropdownCatalog start

  useEffect(() => {
    function handleClickCategoryOutside(event) {
      if (
        dropdownCategoryRef.current &&
        !dropdownCategoryRef.current.contains(event.target)
      ) {
        setCategoryUmico(false);
      }
    }

    window.addEventListener("click", handleClickCategoryOutside);
    return () => {
      window.removeEventListener("click", handleClickCategoryOutside);
    };
  }, []);

  const categoryDropDown = () => {
    setCategoryUmico((prevCatalog) => !prevCatalog);
  };

  // dropdown Catalog end

  // dropdown_phone number open-close function start

  useEffect(() => {
    function handleClickPhoneOutside(event) {
      if (
        phoneNumberRef.current &&
        !phoneNumberRef.current.contains(event.target)
      ) {
        setPhoneNumberArrow(false);
      }
    }

    window.addEventListener("click", handleClickPhoneOutside);
    return () => {
      window.removeEventListener("click", handleClickPhoneOutside);
    };
  }, []);

  const phoneDropDown = () => {
    setPhoneNumberArrow((prevPhone) => !prevPhone);
  };

  // dropdown_phone number open-close function end

  //  login droprown start

  useEffect(() => {
    function handleClickLoginOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setLoginArrow(false);
      }
    }

    window.addEventListener("click", handleClickLoginOutside);
    return () => {
      window.removeEventListener("click", handleClickLoginOutside);
    };
  }, []);

  const LoginDropdown = () => {
    setLoginArrow((prevLogin) => !prevLogin);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //  login droprown end
  // search bar start
  const [searchQuery, setSearchQuery] = useState("");
  const [searchContent, setSearchContent] = useState([]);

  const categoryClick = () => setSearchQuery("");
  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredItems = Umico.filter((item) => {
      return item.manufacturer.toLowerCase().includes(query);
    });
    setSearchContent(filteredItems);
  };

  const manufacturerCategory = searchContent.map((item) => item.manufacturer);

  const uniqueCategories = [...new Set(manufacturerCategory)];

  return (
    <div className="header">
      <div className="header_up">
        {/* sirket catalog dropdown start */}
        <div className="header_up-section-one">
          <div className="header_sirket-katoloqu-dropdown" ref={dropdownRef}>
            <p
              className="header_sirket-katoloqu-dropdown-name"
              onClick={dropDown}
            >
              Şirkət kataloqu
              <span
                className={
                  arrow
                    ? "header_sirket-katoloqu-dropdown_icon-up"
                    : "header_sirket-katoloqu-dropdown_icon-down"
                }
              >
                <IoIosArrowDown />
              </span>{" "}
            </p>
            <div
              className={
                arrow
                  ? "header_sirket-katoloqu-dropdown-content"
                  : "dropdown_display"
              }
            >
              <div className="header_sirket-katoloqu-dropdown-content-body">
                <ul onClick={() => setArrow(false)}>
                  <li>
                    <a
                      href="https://umico.az/category/226-supermarketler"
                      target="_blank"
                    >
                      <span>
                        <GiShoppingBag />
                      </span>
                      Supermarketler
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://umico.az/category/1-restoran-ve-kafeler"
                      target="_blank"
                    >
                      <span>
                        <GiMeal />
                      </span>
                      Restoran və kafelər{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://umico.az/category/9-moda-ve-stil"
                      target="_blank"
                    >
                      <span>
                        <GiConverseShoe />
                      </span>
                      Moda və stil
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://umico.az/category/38-gozellik-ve-saglamliq"
                      target="_blank"
                    >
                      <span>
                        <GiDelicatePerfume />
                      </span>
                      Gözəllik və sağlamlıq
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://umico.az/category/27-qurgu-ve-texnologiyalar"
                      target="_blank"
                    >
                      <span>
                        <RiGamepadFill />
                      </span>
                      Qurğu və texnologiyalar
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://umico.az/category/60-usaq-ve-analara"
                      target="_blank"
                    >
                      <span>
                        <GiBabyBottle />
                      </span>
                      Uşaq və analara
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://umico.az/category/82-ev-ve-meiset"
                      target="_blank"
                    >
                      <span>
                        <GiSofa />
                      </span>
                      Ev və məişət
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://umico.az/category/112-istirahet-ve-eylence"
                      target="_blank"
                    >
                      <span>
                        <TbBuildingCircus />
                      </span>
                      İstirahət və əyləncə
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://umico.az/category/164-is-ve-tehsil"
                      target="_blank"
                    >
                      <span>
                        <MdCastForEducation />
                      </span>
                      İş və təhsil
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://umico.az/category/175-gezinti-ve-seyahetler"
                      target="_blank"
                    >
                      <span>
                        <GiCommercialAirplane />
                      </span>
                      Gəzinti və səyahətlər
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://umico.az/category/180-avto-moto-ve-diger-neqliyyat"
                      target="_blank"
                    >
                      <span>
                        <AiFillCar />
                      </span>
                      Avto , moto və digər nəqliyyat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* sirket catalog dropdown end */}

          <div className="header_navbar">
            <Navbar />
          </div>
        </div>
        <div className="header_up-section-two">
          {/* phone number dropdown start */}
          <div ref={phoneNumberRef}>
            <p
              onClick={phoneDropDown}
              className="header_phone-number-dropdown_menu"
            >
              <span className="phoneNumberIcon">
                <BsFillTelephoneFill />
              </span>
              915
              <span
                className={
                  phoneNumberArrow
                    ? "header_phone-number_icon-up"
                    : "header_phone-number_icon-down"
                }
              >
                <IoIosArrowDown />
              </span>
            </p>
            <div
              className={
                phoneNumberArrow
                  ? "heder_phone-number-content"
                  : "dropdown_display"
              }
            >
              <div className="header_phone-number-content-body">
                <h3>Qaynar xətt</h3>
                <span>915</span>
                <p>Digər ölkələrdən gələn zənglər üçün +994 12 210 00 21 </p>
                <p>Çağrı mərkəzinin iş saatlari</p>
                <p>B.e-C. 9 00 - 00 00 </p>
                <p>Ş.-B. 10 00 - 00 00 </p>
                <p>
                  Müştəri vəkili ilə ofisdə görüş təyin etmək üçün 915 nömrəsi
                  ilə əlaqə saxlayın
                </p>
              </div>
            </div>
          </div>
          {/* phone number dropdown end */}
          {/* login/registr start */}
          <div className="header_login-registr-form-link">
            {register ? (
              <>
                <div
                  className="header_login-registr-form-link-login"
                  onClick={LoginDropdown}
                  ref={loginRef}
                >
                  <span>
                    <BsFillPersonFill />
                  </span>
                  <span style={{ cursor: "pointer" }}>Şəxsi hesabım</span>
                  <span
                    className={
                      loginArrow
                        ? "header_login_icon-up"
                        : "header_login_icon-down"
                    }
                  >
                    <IoIosArrowDown />
                  </span>
                </div>
                <div
                  className={
                    loginArrow ? "heder_login-content" : "dropdown_display"
                  }
                >
                  <div className="login-content-dropdown">
                    <div className="login-content-dropdown-section-one">
                      <p>
                        <Link to={"/hesab"}>
                          <span>
                            <MdOutlinePortrait />
                          </span>
                          Hesab
                        </Link>
                      </p>
                    </div>
                    <div className="login-content-dropdown-section-two">
                      <h3>
                        <img src={require("../Img/umicoMarket.png")} alt="" />
                      </h3>
                      <p>
                        <Link to={"/hesab/sebet"}>
                          <span>
                            <RxBackpack />
                          </span>
                          Mənim sifarişlərim
                        </Link>
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
                        <Link to={"/hesab/secilmisler"}>
                          <span>
                            <AiOutlineHeart />
                          </span>
                          Seçilmişlər
                        </Link>
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
                    <div className="login-content-dropdown-section-there">
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
                    <div className="login-content-dropdown-section-four">
                      <p>
                        <Link>
                          <span>
                            <AiOutlinePoweroff />
                          </span>
                          Çıxış
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Link to={"/loginRegistrForm"}>
                <span>
                  <BsFillPersonFill />
                </span>
                Qeydiyyat | Giriş{" "}
              </Link>
            )}
          </div>
          {/* login/registr end */}
        </div>
      </div>
      <div className="header_down">
        <div className="header_down-bar">
          <span className="header_down-bar-logo">
            <Link to={"/"}>
              <img src={require("../Img/footer-mall.png")} alt="" />
              Umico
            </Link>
          </span>
          <div className="header_down-bar-catalog" onClick={categoryDropDown}>
            {/* <MehsulKataloq /> */}
            <div
              className="header_down-bar-catalog-btn"
              ref={dropdownCategoryRef}
            >
              <p>
                Məhsul kataloqu
                <span
                  className={
                    categoryUmico
                      ? "header_down-bar-catalog-btn-icon-up"
                      : "header_down-bar-catalog-btn-icon-down"
                  }
                >
                  <IoIosArrowDown />
                </span>{" "}
              </p>
              <div
                className={
                  categoryUmico
                    ? "header_down-bar-catalog-btn-dropdown-content"
                    : "dropdown_display"
                }
              >
                <div className="header_down-bar-catalog-btn-dropdown-body">
                  <div className="header_down-bar-catalog-mehsul-catogory">
                    {categoriesUmico.map((item, index) => {
                      const IconComponent = icons[index % icons.length];

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
            </div>
          </div>
          <div className="header-down-bar-search">
            <div className="header-down-bar-search-input">
              <input type="text" value={searchQuery} onChange={handleChange} />
            </div>
            <div
              className={
                searchQuery == ""
                  ? "dropdown_display"
                  : "header-down-bar-search-input-content"
              }
            >
              {searchQuery !== "" ? (
                uniqueCategories.length > 0 ? (
                  uniqueCategories.map((item, index) => (
                    <Link to={`/CategorySearch/${item}`} key={index}>
                      <p onClick={() => categoryClick()}>{item}</p>
                    </Link>
                  ))
                ) : (
                  <p>
                    Sorğuya uyğun nəticə tapılmadı.Zəhmət olmasa sorğunu
                    dəqiqləşdirin
                  </p>
                )
              ) : null}
            </div>
          </div>
          <div className="header-product-icons">
            <Link to={"/hesab/sebet"}>
              {" "}
              <div>
                <Badge badgeContent={cart.length}>
                  <TbShoppingCart />
                </Badge>
              </div>
            </Link>
            <Link to={"/hesab/secilmisler"}>
              {" "}
              <div>
                <Badge badgeContent={selected.length}>
                  <AiOutlineHeart />
                </Badge>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
