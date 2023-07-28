import React from "react";

function Yenilikler() {
  return (
    <div className="main-section-six-box">
      <h2>
        Yeniliklər <img src={require("../Img/umicoMarket.png")} alt="" />
      </h2>
      <div className="main-section-six-box-loyalliq">
        <div className="main-section-six-box-loyalliq-img">
          <img src={require("../Img/loyalliq.jpg")} alt="" />
        </div>
        <div className="main-section-six-box-loyalliq-name">
          <h3> Umico Bonus loyallıq proqramı</h3>
          <p>Ən sevdiyiniz mağazalarda keşbek qazanın</p>
          <div className="main-section-six-box-loyalliq-contents">
            <div className="main-section-six-box-loyalliq-contents-boxs">
              <div>
                <img src={require("../Img/loyalty-card.png")} alt="" />
              </div>
              <span>Umico mobil tətbiqini yükləyin</span>
            </div>
            <div className="main-section-six-box-loyalliq-contents-boxs">
              <div>
                <img src={require("../Img/loyalty-sebet.png")} alt="" />
              </div>
              <span>
                Umico Bonus tərəfdaşları şəbəkəsində alış-verişə görə keşbek
                qazanın
              </span>
            </div>
            <div className="main-section-six-box-loyalliq-contents-boxs">
              <div>
                <img src={require("../Img/loyalty-hediye.png")} alt="" />
              </div>
              <span>
                Umico Bonus şəbəkəsində alışlarınızı qazandığınız bonuslarla
                ödəyin
              </span>
            </div>
            <div className="main-section-six-box-loyalliq-button">
              <button>Ətraflı öyrən</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yenilikler;
