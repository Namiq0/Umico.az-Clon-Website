import { createContext, useState } from "react";
import Umico from "../UmicoApi/@asgaraliyev (1).json";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [reg, setReg] = useState(false);

  const categoriesUmico = [
    ...new Set(Umico.map((item) => item.categories[0].name)),
  ];

  const logoCategories = [...new Set(Umico.map((item) => item.Logo))];

  const [cart, setCart] = useState([]);

  const [selected, setSelected] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        register: reg,
        setReg,
        categoriesUmico,
        logoCategories,
        cart,
        setCart,
        selected,
        setSelected,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
