import React from "react";
import PhoneCods from "../CountryJsonApi/PhoneCods.json";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useRef, useEffect, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

import { GlobalContext } from "../ContextApi/Context";

function LoginRegistrForm() {
  const { setReg } = useContext(GlobalContext);
  // Flang and code change function start
  const [flag, setFlag] = useState("https://flagcdn.com/w320/az.png");
  const [rootCode, setRootCode] = useState("+9");
  const [suffixesCode, setSuffixesCode] = useState("94");

  const handlerPhoneCode = (item) => {
    setFlag(item.flags.png);
    setRootCode(item.idd.root);
    setSuffixesCode(item.idd.suffixes);
  };

  // Flang and code change function end

  // dropdown function start

  const [dropdownFlag, setDropdownFlag] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownFlag(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
    
  }, []);
  

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const dropDown = () => {
    setDropdownFlag((prevArrow) => !prevArrow);
  };

  // dropdown function end
  // login registr 2step start
  const [number, setNumber] = useState();
  const [disabledd, setDisabledd] = useState(false);
  const [notification, setNotifacion] = useState(false);
  const [loder, setLoder] = useState(false);
  const [nextStepNumber, setNextStepNumber] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, ""); // Sadece sayısal karakterleri koru
    const truncatedValue = numericValue.slice(0, 4); // İlk 4 karakteri al
    setNextStepNumber(truncatedValue);
  };

  const loginNextStep = () => {
    setLoder(true);
    setTimeout(() => {
      if (number.length == "9") {
        setDisabledd(true);
        setNotifacion(false);
      } else {
        setDisabledd(false);
        setNotifacion(true);
      }
      setLoder(false);
    }, 2000);
  };

  // login registr 2step end

  return (
    <div className="login_register-form">
      <div className="login_register-form-box">
        <div className="login_register-form-name">
          <h2>
            {disabledd
              ? "SMS kodu daxil edin"
              : "Mobil telefonunuzu daxil edin"}
          </h2>
        </div>
        <div className="login_register-form-content">
          {disabledd ? (
            <div className="nextstep">
              <p>Telefon:</p>
              <div className="nextstep-login_register-form-content-sms-up">
                <div className="nextstep-login_register-form-content-flag-box-img">
                  <img src={flag} />
                  <span>
                    {rootCode}
                    {suffixesCode}
                    {number}
                  </span>
                </div>
              </div>
              <p>Zəhmət olmasa SMS-lə gəlmiş kodu daxil edin:</p>
              <div className="nextstep-login_register-form-content-sms-code">
                <input
                  type="number"
                  placeholder="XXXX"
                  value={nextStepNumber}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
          ) : (
            <div
              ref={dropdownRef}
              className="login_register-form-content-flag-box"
            >
              <div
                onClick={dropDown}
                className="login_register-form-content-flag-box-img"
              >
                <img src={flag} />{" "}
                <span
                  className={
                    dropdownFlag
                      ? "header_sirket-katoloqu-dropdown_icon-up"
                      : "header_sirket-katoloqu-dropdown_icon-down"
                  }
                >
                  <IoIosArrowDown />
                </span>
              </div>
              <div
                className={
                  dropdownFlag
                    ? "login_register-form-content-flag-box-dropdown"
                    : "dropdown_display"
                }
              >
                <div
                  onClick={() => setDropdownFlag(false)}
                  className="login_register-form-content-flag-box-dropdown-content"
                >
                  <div>
                    {PhoneCods.map((item, index) => {
                      return (
                        <div key={index} onClick={() => handlerPhoneCode(item)}>
                          <img src={item.flags.png} />
                          <span>{item.name.common}</span>
                          <span>
                            ({item.idd.root}
                            {item.idd.suffixes})
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="login_register-form-content-flag-box-input">
                <span>{rootCode}</span>
                <span>{suffixesCode}</span>
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
          )}
          <p className="login-notification">
            {notification && "9 reqemli nomreni daxil edin"}
          </p>
          <div>
            {disabledd ? (
              <div className="nextstep-login_register-form-content-sms-buttons">
                <div
                  className={
                    nextStepNumber.length === 4
                      ? "nextstep-login_register-form-content-sms-giris-btn"
                      : "nextstep-login_register-form-content-sms-giris-btn-false disabled"
                  }
                >
                  {nextStepNumber.length === 4 ? (
                    <Link to={"/"} onClick={() => setReg(true)}>
                      {loder ? (
                        <CircularProgress sx={{ color: "white" }} />
                      ) : (
                        <button
                          loading={loder}
                          className="nextstep-login_register-form-content-sms-giris-btn-button "
                          type="button"
                        >
                          Giriş
                        </button>
                      )}
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="nextstep-login_register-form-content-sms-giris-btn-button disabled-button"
                      type="button"
                    >
                      Giriş
                    </button>
                  )}
                </div>

                <div
                  className="nextstep-login_register-form-content-sms-geri-btn"
                  onClick={() => {
                    setDisabledd(false);
                  }}
                >
                  <button>Geri</button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => loginNextStep()}
                className="login_register-form-content-flag-box-next-btn-div"
              >
                {loder ? (
                  <CircularProgress sx={{ color: "white" }} />
                ) : (
                  <button
                    loading={loder}
                    className="login_register-form-content-flag-box-next-btn"
                    type="button"
                  >
                    İrəli
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegistrForm;
