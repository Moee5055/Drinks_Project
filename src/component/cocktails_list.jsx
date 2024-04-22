import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

export default function Item_List() {
  const { loading, cocktailsData } = useGlobalContext();

  if (loading) {
    return (
      <section className="grid h-[400px] place-items-center">
        <h1 className="font-bold text-[4rem]">Loading ....</h1>
      </section>
    );
  }

  if (cocktailsData < 1) {
    return (
      <section className="grid h-[400px] place-items-center">
        <h2 className="font-bold text-[1.5rem]">
          No Cocktails Matched your Search Criteria.
        </h2>
      </section>
    );
  }

  return (
    <section className="mt-[5rem] mx-auto w-[90%] max-w-[1100px]">
      <h2 className="mb-[2rem] font-bold text-[2rem] tracking-[2px] text-center">
        Cocktails
      </h2>
      <div className="grid grid-cols-2 gap-[2rem] md:grid-cols-3">
        {cocktailsData.map((item) => {
          const { id, name, glass, info, image } = item;
          return (
            <article key={id} className="shadow-lg gap-[1rem] bg-white">
              <figure>
                <img
                  src={image}
                  alt={name}
                  className="
                w-full h-[250px] object-cover"
                />
              </figure>
              <div className="p-[1rem] space-y-2">
                <h2 className="font-bold text-[1.7rem] tracking-[2px]">
                  {name}
                </h2>
                <h3 className="font-bold text-lg tracking-[3px]">{glass}</h3>
                <p className="text-slate-500">{info}</p>

                <button className="bg-lime-700 px-2 py-1 text-white rounded tracking-[3px]">
                  <Link to={`/cocktail/${id}`}>Details</Link>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
