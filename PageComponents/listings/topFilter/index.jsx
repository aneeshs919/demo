import { useState } from "react";

const TopFilter = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="flex gap-8 py-2 filter-shadow px-16 relative z-50 justify-between">
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="border border-[#CECAE0] px-4 py-2 w-[380px] outline-none font-Inter text-PS_primaryText max-h-[40px]"
        />
      </div>
      <div>
        <div>
          <ul className="flex font-Inter text-PS_secondaryText text-base font-medium">
            <li
              className={`px-[24px] border border-[#CECAE0] h-[40px] flex items-center border-r-0 cursor-pointer ${
                active === 1 ? "text-PS_accent" : ""
              } `}
              onClick={() => {
                setActive(1);
              }}
            >
              All Properties
            </li>
            <li
              className={`px-[24px] border border-[#CECAE0] h-[40px] flex items-center border-r-0 cursor-pointer ${
                active === 2 ? "text-PS_accent" : ""
              } `}
              onClick={() => {
                setActive(2);
              }}
            >
              Farm Land
            </li>
            <li
              className={`px-[24px] border border-[#CECAE0] h-[40px] flex items-center cursor-pointer border-r-0 ${
                active === 3 ? "text-PS_accent" : ""
              } `}
              onClick={() => {
                setActive(3);
              }}
            >
              Plot
            </li>
            <li
              className={`px-[24px] border border-[#CECAE0] h-[40px] flex items-center cursor-pointer ${
                active === 4 ? "text-PS_accent" : ""
              } `}
              onClick={() => {
                setActive(4);
              }}
            >
              Building
            </li>
          </ul>
        </div>
      </div>
      <div className="border border-[#CECAE0] px-4 py-2 w-[380px] outline-none font-Inter text-PS_primaryText max-h-[40px]">
        <select
          name="sortBy"
          id="sortBy"
          className="outline-none border-0 w-full h-full"
        >
          <option value="Relvance">Sort by : Relevance</option>
          <option value="Ascending">Sort by : Ascending</option>
          <option value="Descending">Sort by : Descending</option>
          <option value="Popularity">Sort by : Popularity</option>
        </select>
      </div>
    </div>
  );
};

export default TopFilter;
