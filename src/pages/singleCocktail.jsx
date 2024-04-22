import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const [title, setTitle] = useState("");

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        params: {
          i: id,
        },
      });

      const { drinks } = response.data;
      if (drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instruction,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];

        const ingredient = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];

        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instruction,
          ingredient,
        };
        setTitle(name);
        setCocktail(newCocktail);
      } else {
        setCocktail([]);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [id]);

  useEffect(() => {
    document.title = `Cocktails | ${title}`;
  }, []);

  if (loading) {
    return (
      <section className="grid h-[90vh] place-items-center">
        <h1 className="font-bold text-[4rem]">Loading ....</h1>
      </section>
    );
  }

  if (!cocktail) {
    return <h2>No cocktails Found.</h2>;
  }

  const { name, image, info, glass, category, instruction, ingredient } =
    cocktail;

  return (
    <section className="grid place-items-center w-[90%] mb-[3rem] max-w-[1100px] mx-auto mt-[4rem]">
      <button
        className="bg-lime-700 rounded text-white px-[1.3rem] py-[0.6rem]
      capitalize tracking-[3px]">
        <Link to="/">back home</Link>
      </button>
      <h2 className="font-bold mb-[3rem] text-[1.6rem] mt-[1rem]">{name}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <figure className="w-[380px] mx-auto">
          <img src={image} alt={name} className="w-full h-[350px]" />
        </figure>
        <div className="space-y-4 font-bold md:col-span-2 md:ml-[3rem]">
          <p>
            <span className="bg-lime-600/[0.4] text-zinc-600 p-1 rounded  mr-2">
              Name:
            </span>
            {name}
          </p>
          <p>
            <span className="bg-lime-600/[0.4] p-1 text-zinc-600 rounded mr-2">
              Category:
            </span>
            {category}
          </p>
          <p>
            <span className="bg-lime-600/[0.4] text-zinc-600 p-1 rounded mr-2">
              Info:
            </span>
            {info}
          </p>
          <p>
            <span className="bg-lime-600/[0.4] p-1 text-zinc-600 rounded mr-2">
              Glass:
            </span>
            {glass}
          </p>
          <p>
            <span className="bg-lime-600/[0.4] p-1 text-zinc-600 rounded mr-2">
              Instructions:
            </span>
            {instruction}
          </p>
          <p>
            <span className="bg-lime-600/[0.4] p-1 text-zinc-600 rounded mr-2">
              Ingredient:
            </span>
            {ingredient.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
