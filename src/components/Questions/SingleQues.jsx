import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

const SingleQues = ({ q }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="transition"
      onClick={() => setOpen((prev) => !prev)}
      className={`border-b border-slate-300 py-3 overflow-hidden
        ${open ? "h-full" : "h-[4.5rem]"}`}
    >
      <h1
        className="py-4 flex items-center justify-between text-sm font-raleway 
        text-slate-800 cursor-pointer hover:text-red-500 sm:text-lg"
      >
        {q.question}
        <span>
          {open ? (
            <CloseIcon sx={{ fontSize: "1.2rem" }} />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </span>
      </h1>
      <p className="text-sm sm:text-lg">{q.answer}</p>
    </div>
  );
};

export default SingleQues;
