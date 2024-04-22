import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-slate-200">
      <div
        className="flex justify-around 
      p-[0.85rem] border-b-4 border-gray-500">
        <div>
          <Link to={"/"}>
            <h1 className="tracking-[3px] font-bold">TheCocktailDB</h1>
          </Link>
        </div>
        <ul className="flex space-x-3 tracking-[2px]">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
