import { useGlobalContext } from "../context";
import { useRef, useEffect } from "react";

export default function Search_List() {
  const { setSearch } = useGlobalContext();
  const searchValue = useRef("");

  const searchCocktail = () => {
    setSearch(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  });

  return (
    <section className="mt-[5rem] mx-auto p-[1.2rem] w-[450px] bg-white shadow-lg">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="search"
          className="tracking-[0.1rem] inline-block mb-[0.8rem]">
          Search Your Favourite Cocktail
        </label>
        <input
          type="text"
          id="search"
          ref={searchValue}
          onChange={searchCocktail}
          className="bg-slate-200 w-full py-[0.4rem] px-[0.85rem]"
        />
      </form>
    </section>
  );
}
