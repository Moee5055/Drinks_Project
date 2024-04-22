import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [cocktailsData, setCocktailsData] = useState([]);

  const filterCocktails = (drinks) => {
    const newCocktails = drinks.map((item) => {
      const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
      };
    });
    setCocktailsData(newCocktails);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url, {
          params: {
            s: search,
          },
        });

        const { drinks } = response.data;

        if (drinks) {
          filterCocktails(drinks);
        } else {
          setCocktailsData([]);
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData(url);
  }, [search]);

  return (
    <AppContext.Provider value={{ loading, setSearch, cocktailsData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
