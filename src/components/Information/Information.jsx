import React, { useState } from "react";
import { filters } from "./Filter";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

const Information = () => {
  const [active, setActive] = useState(filters[0]);

  return (
    <div className="size mb-[2rem]">
      <div className="flex items-center gap-4">
        {filters.map((btn, i) => (
          <button
            onClick={() => setActive(btn)}
            key={i}
            className={`w-full border text-center border-gray-400 py-[1.5rem] px-[1rem] lg:px-[1.5rem]
            lg:flex lg:items-center gap-3 lg:text-left lg:text-lg font-semibold
            ${active.btn === btn.btn ? "bg-red-500 text-white" : ""}
            `}
          >
            {btn.icon}
            <span className="hidden lg:flex lg:text-[1rem] xl:text-lg">
              {btn.btn}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 pt-9">
        <div className="flex-1 text-gray-700">
          <h1 className="text-2xl text-center lg:text-left font-bold font-raleway text-gray-800">
            {active.title}
          </h1>
          <span className="italic py-2 block ">{active.tag}</span>
          <p className="py-3">{active.desc}</p>

          {active.sub.map((item, i) => (
            <p key={i} className="py-2">
              <span className="text-red-500 mr-1">
                <DoneAllOutlinedIcon />
              </span>
              {item}
            </p>
          ))}
        </div>
        <div className="flex-1">
          <img src={active.img} alt="filterImg" />
        </div>
      </div>
    </div>
  );
};

export default Information;
