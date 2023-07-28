import React from "react";
import { Link } from "react-router-dom";
import { ImHammer2 } from "react-icons/im";
import { BsFillHandThumbsDownFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="Footer-umico">
      <div className="Footer-umico-up">
        <div className="Footer-umico-section-one">
          <div className="Footer-umico-section-one-content-merkez">
            <h3>Çağrı mərkəzi</h3>
            <p>Qaynar xətt</p>
            <span className="Footer-umico-section-one-content-merkez-callNumber">
              915
            </span>
            <p>
              <Link
                to={
                  "https://forms.office.com/Pages/ResponsePage.aspx?id=aFCpysF8QUySX4dcIqXEyeqyPHSk5jJHt4BwrQX2kXVUN0s1QVBTNkg4SllEUjRaMzBORUNaSzNaSiQlQCN0PWcu&lang=az"
                }
                target="_blank"
              >
                <span className="Footer-umico-section-one-content-merkez-qaytarma">
                  <BsFillHandThumbsDownFill />
                </span>
                Malı qaytarmaq
              </Link>
            </p>
            <p>
              <Link
                to={
                  "https://forms.office.com/pages/responsepage.aspx?id=aFCpysF8QUySX4dcIqXEybzogOad69pAsFU7zQaWYkNUMlpLWkg4MTdHTTJSODFWU09DNVE4WUZUQi4u&lang=az"
                }
                target="_blank"
              >
                <span className="Footer-umico-section-one-content-merkez-vekil">
                  <ImHammer2 />
                </span>
                Müştəri Vəkilinə onlayn müraciət
              </Link>
            </p>
            <p className="Footer-umico-section-one-content-merkez-musteri">
              Müştəri vəkili ilə ofisdə görüş təyin <br /> etmək üçün 915
              nömrəsi ilə əlaqə <br /> saxlayın
            </p>
            <p className="  ">
              Digər ölkələrdən gələn zənglər üçün <br /> +994 12 210 00 21{" "}
            </p>
            <p>Çağrı mərkəzinin iş saatlari</p>
            <p>B.e-C. 9 00 - 00 00 </p>
            <p>Ş.-B. 10 00 - 00 00 </p> 
          </div>
          <div className="Footer-umico-section-one-content-sosial">
            <h3>Bizi izləyin</h3>
            <ul>
              <li>
                <Link to={"https://umico.az/live/"} target="_blank">
                  <span>
                    <img src={require("../Img/footer-mall.png")} alt="" />
                  </span>
                  Umico Live jurnalı
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "https://api.whatsapp.com/send/?phone=%2B994507000915&text&type=phone_number&app_absent=0"
                  }
                  target="_blank"
                >
                  <span>
                    <img src={require("../Img/footer-whatsapp.png")} alt="" />
                  </span>
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link to={"https://t.me/Umico_Az_bot"} target="_blank">
                  <span>
                    <img src={require("../Img/telegram-desktop.png")} alt="" />
                  </span>
                  Telegram
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.facebook.com/umicoshopping/"}
                  target="_blank"
                >
                  <span>
                    <img src={require("../Img/footer-facebook.png")} alt="" />
                  </span>
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.instagram.com/umico_az/"}
                  target="_blank"
                >
                  <span>
                    <img src={require("../Img/footer-instagram.png")} alt="" />
                  </span>
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "https://www.youtube.com/channel/UCwrwD_9UO0rOS3hO7KChvZg"
                  }
                  target="_blank"
                >
                  <span>
                    <img src={require("../Img/footer-youtube.png")} alt="" />
                  </span>
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer-umico-section-two">
          <h3>Umico Market</h3>
          <ul>
            <li>
              <Link>Umico Market-də necə sifariş etmək olar</Link>
            </li>
            <li>
              <Link>Çatdırılma və ödəmə</Link>
            </li>
            <li>
              <Link>Azərpoçt şöbələrinə çatdırılma</Link>
            </li>
            <li>
              <Link>Kredit</Link>
            </li>
            <li>
              <Link>Taksitli ödəniş</Link>
            </li>
            <li>
              <Link>Promokodlar və endirimlər</Link>
            </li>
            <li>
              <Link>Sifarişin ləğv edilməsi və qaytarılması</Link>
            </li>
            <li>
              <Link>Azərpoçt şöbələrində geri qaytarma prosesi</Link>
            </li>
            <li>
              <Link>Umico Market təhvil məntəqələrinin siyahısı</Link>
            </li>
            <li>
              <Link>Azərpoçt şöbələrinin siyahısı</Link>
            </li>
            <li>
              <Link>Servis mərkəzləri</Link>
            </li>
            <li>
              <Link>Ən çox verilən suallar</Link>
            </li>
          </ul>
          <h3>Umico Bonus</h3>
          <ul>
            <li>
              <Link>Umico Bonus ilə necə alış-veriş etmək olar</Link>
            </li>
            <li>
              <Link>Umico Bonus kartını haradan əldə etmək olar</Link>
            </li>
            <li>
              <Link>Umico Bonus tərəfdaşlarının siyahısı</Link>
            </li>
          </ul>
        </div>
        <div className="Footer-umico-section-three">
          <h3>Tərəfdaşlar üçün Umico</h3>
          <ul>
            <li>
              <Link>Umico Market-də satışa necə başlamaq olar</Link>
            </li>
            <li>
              <Link>Umico-nun tərəfdaşı olmaq</Link>
            </li>
            <li>
              <Link>Texniki reqlament</Link>
            </li>
          </ul>
          <h3>Şirkət</h3>
          <ul>
            <li>
              <Link>İstifadə şərtləri (ictimai oferta) Umico Bonus</Link>
            </li>
            <li>
              <Link>İstifadə şərtləri (ictimai oferta) Umico Market</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="Footer-umico-down">
        <p>
          Umico - ağıllı alış-veriş üçün köməkçiniz. Bütün hüquqlar qorunur (c)
          Competo LLC. Umico Bonus İstifadəçi Sazişi, istifadəçi razılaşması
          Umico Market və məxfilik siyasəti.
        </p>
      </div>
    </div>
  );
}

export default Footer;
