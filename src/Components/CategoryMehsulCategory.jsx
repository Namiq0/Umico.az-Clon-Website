import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../ContextApi/Context";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Umico from "../UmicoApi/@asgaraliyev (1).json";
import { Link } from "react-router-dom";
import { TbCurrencyManat, TbShoppingCart } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { RiScales3Fill } from "react-icons/ri";
import CircularProgress from "@mui/material/CircularProgress";

function CategoryMehsulCategory() {
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [clickedSelect, setClickedSelect] = useState({});

  const productsPerPage = 15;

  const [clickedItems, setClickedItems] = useState({});

  const retailPrices = Umico.map((product) => product.retail_price);

  const maximum = Math.max(...retailPrices);
  const minimum = Math.min(...retailPrices);

  const [min, setMin] = useState([
    Math.min(...retailPrices),
    Math.max(...retailPrices),
  ]);

  const hanleValueChange = (e, date) => {
    setMin(date);
  };
  const [filterContent, setFilterContent] = useState(Umico);

  const handlePriceFilter = () => {
    const PriceFilter = Umico.filter(
      (product) =>
        (product.retail_price >= min[0]) & (product.retail_price <= min[1])
    );
    setFilterContent(PriceFilter);
  };

  const totalPages = Math.ceil(Umico.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { setCart, setSelected } = useContext(GlobalContext);

  const addToCart = (uuid) => {
    const productToAdd = displayedProducts.find(
      (product) => product.uuid === uuid
    );

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

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = filterContent.slice(startIndex, endIndex);

  return (
    <div className="category-page-background">
      <div className="category-page">
        <div className="category-page-right-category">
          <h2>Filtr</h2>
          <div className="category-page-right-filtr-body">
            <div className="category-page-right-filtr-body-input">
              <input type="number" value={min[0]} />
              <input type="number" value={min[1]} />
              <button onClick={handlePriceFilter}>OK</button>
            </div>
            <div className="category-page-right-filtr-body-range">
              <Box sx={{ width: 200 }}>
                <Slider
                  value={min}
                  onChange={hanleValueChange}
                  min={minimum}
                  max={maximum}
                />
              </Box>
            </div>
          </div>
        </div>
        <div className="category-page-left-category">
          <div className="main-section-four-satilanlar-box-category">
            {displayedProducts.map((product) => (
              <div
                key={product.uuid}
                className="main-section-four-satilanlar-box-productCard-category"
              >
                <div className="main-section-four-satilanlar-box-productCard-all-category">
                  <div
                    onClick={() => addToSelected(product.uuid)}
                    className={`shopping-cart-icon ${
                      clickedSelect[product.uuid] ? "clicked" : ""
                    }`}
                  >
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
                  <div className="main-section-four-satilanlar-box-productCard-content-category">
                    <div className="main-section-four-satilanlar-box-productCard-content-imgdiv-category">
                      {isLoading ? (
                        <div className="progress-container-category">
                          <CircularProgress sx={{ color: "#7c62e3" }} />
                        </div>
                      ) : (
                        <img src={product.img_url_original} alt="" />
                      )}
                    </div>
                    <p className="main-section-four-satilanlar-box-productCard-content-price-category">
                      {product.retail_price}{" "}
                      <span>
                        <TbCurrencyManat />
                      </span>
                    </p>
                    <p className="main-section-four-satilanlar-box-productCard-content-name-category">
                      {product.name}
                    </p>
                    <p className="main-section-four-satilanlar-box-productCard-content-satici-category">
                      <span>Satıcı:</span>
                      {product.manufacturer}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="productCard-content-category-btn">
            {totalPages > 1 && Umico.length > productsPerPage && (
              <div className="pagination-buttons">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    className={currentPage === index + 1 ? "active-btn" : ""}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryMehsulCategory;
