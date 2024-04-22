import React from "react";
import { Link } from "react-router-dom";

export default function ErrorDisplay() {
  return (
    <section className="mt-[3rem]">
      <div className="grid place-items-center">
        <h1 className="font-bold text-[1.5rem] capitalize">
          oops! it's a dead end.
        </h1>
        <Link
          to="/"
          className="tracking-[3px] rounded ease-in-out duration-300 mt-3 capitalize inline-block 
          hover:bg-green-600 py-2 px-3 bg-green-900 text-white">
          back home
        </Link>
      </div>
    </section>
  );
}
