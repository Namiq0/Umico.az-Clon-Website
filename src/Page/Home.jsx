import React from "react";
import { useEffect } from "react";
import MehsulKataloq from "../Components/MehsulKataloq";
import CaruselNews from "../Components/CaruselNews";
import Pano from "../Components/Pano";
import DownPano from "../Components/DownPano";
import UmicoAlis from "../Components/UmicoAlis";
import Brendler from "../Components/Brendler";
import EnCoxSatilanlar from "../Components/EnCoxSatilanlar";
import AktualOlanlar from "../Components/AktualOlanlar";
import Yenilikler from "../Components/Yenilikler";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="App_main">
        <div className="main-setion-one">
          <div className="main-setion-one-category">
            <MehsulKataloq />
          </div>
          <div className="main-setion-one-news">
            <div className="main-setion-one-news-up">
              <CaruselNews />
              <Pano />
            </div>
            <div className="main-setion-one-news-down">
              <DownPano />
            </div>
          </div>
        </div>

        <div className="main-section-three">
          <UmicoAlis />
        </div>
        <div className="main-section-four-bacground">
          <div className="main-section-four">
            <Brendler />
            <EnCoxSatilanlar />
          </div>
        </div>
        <div className="main-section-five">
          <AktualOlanlar />
        </div>
        <div className="main-section-six-bacground">
          <div className="main-section-six">
            <Yenilikler />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
