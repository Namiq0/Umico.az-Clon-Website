import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Share/Header";
import LoginRegistrForm from "./Page/LoginRegistrForm";
import { GlobalProvider } from "./ContextApi/Context";
import Footer from "./Share/Footer";
import Home from "./Page/Home";
import Product from "./Page/Product";
import Category from "./Page/Category";
import CategoryBrends from "./Components/CategoryBrends";
import CategorySearch from "./Components/CategorySearch";
import CategoryMehsulCategory from "./Components/CategoryMehsulCategory";
import Sebet from "./Page/Sebet";
import Secilmisler from "./Page/Secilmisler";
import Hesab from "./Page/Hesab";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <div className="App_header">
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loginRegistrForm" element={<LoginRegistrForm />} />

            <Route
              path="/CategoryMehsulCategory"
              element={<CategoryMehsulCategory />}
            />
            <Route path="/hesab" element={<Hesab />}>
              <Route path="sebet" element={<Sebet />} />
              <Route path="secilmisler" element={<Secilmisler />} />
            </Route>

            <Route path="/product/:uuid" element={<Product />} />
            <Route path="/Category/:item" element={<Category />} />
            <Route path="/CategoryBrends/:item" element={<CategoryBrends />} />
            <Route path="/CategorySearch/:item" element={<CategorySearch />} />
          </Routes>
        </div>
        <div className="App_footer">
          <Footer />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
