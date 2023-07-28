import React from "react";
import { GlobalContext } from "../ContextApi/Context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function Brendler() {
  const { logoCategories } = useContext(GlobalContext);
  const [currentNumber, setCurrentNumber] = useState(0);

  const [sliceNumber, setSliceNumber] = useState(5);
  // const itemsPerPage = 5;
  const totalPages = Math.ceil(logoCategories.length / 5);
  const handleClick = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 5;
    const endIndex = startIndex + 5;
    setCurrentNumber(startIndex);
    setSliceNumber(endIndex);
  };

  const nextLogo = () => {
    if (currentNumber < 15 && sliceNumber < 20) {
      setCurrentNumber(currentNumber + 5);
      setSliceNumber(sliceNumber + 5);
    } else {
      setCurrentNumber(0);
      setSliceNumber(5);
    }
  };
  const prevLogo = () => {
    if (currentNumber > 0 && sliceNumber > 5) {
      setCurrentNumber(currentNumber - 5);
      setSliceNumber(sliceNumber - 5);
    } else {
      const logoCount = logoCategories.length;
      const remainingCount = logoCount % 5;
      setCurrentNumber(logoCount - remainingCount);
      setSliceNumber(logoCount);
    }
  };

  return (
    <>
      <h2>Populyar brendlər</h2>
      <div className="main-section-four-brend">
        <button
          onClick={prevLogo}
          className={currentNumber == 0 ? "displayNone" : "leftButton"}
        >
          <RiArrowLeftSLine />
        </button>
        <div className="main-section-four-brend-carusel">
          {logoCategories
            .slice(currentNumber, sliceNumber)
            .map((item, index) => (
              <div className="main-section-four-brend-content">
                <Link to={`/CategoryBrends/${item}`}>
                  {" "}
                  <img key={index} src={require(`../Img/${item}`)} alt="" />
                </Link>
              </div>
            ))}
        </div>
        <button
          onClick={nextLogo}
          className={currentNumber == 15 ? "displayNone" : "rightButton"}
        >
          <RiArrowRightSLine />
        </button>
        <div className="main-section-four-brend-content-buttons">
          <button onClick={() => handleClick(1)}>
            <div
              className={currentNumber == 0 ? "backgroundColorDivCarusel" : ""}
            ></div>
          </button>
          <button onClick={() => handleClick(2)}>
            <div
              className={currentNumber == 5 ? "backgroundColorDivCarusel" : ""}
            ></div>
          </button>
          <button onClick={() => handleClick(3)}>
            <div
              className={currentNumber == 10 ? "backgroundColorDivCarusel" : ""}
            ></div>
          </button>
          <button onClick={() => handleClick(4)}>
            <div
              className={currentNumber == 15 ? "backgroundColorDivCarusel" : ""}
            ></div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Brendler;
