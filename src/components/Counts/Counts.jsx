import React from "react";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import "./Counts.scss";

const Counts = () => {
  const counts = [
    {
      title: "happy clients",
      total: 3,
      icon: <EmojiEmotionsOutlinedIcon sx={{fontSize : "1.8rem"}}/>,
    },
    {
      title: "projects",
      total: 6,
      icon: <ReceiptLongOutlinedIcon sx={{fontSize : "1.8rem"}}/>,
    },
    {
      title: "hours of support",
      total: 200,
      icon: <HeadsetMicOutlinedIcon sx={{fontSize : "1.8rem"}}/>,
    },
    {
      title: "smart professionals",
      total: 11,
      icon: <PeopleOutlinedIcon sx={{fontSize : "1.8rem"}}/>,
    },
  ];
  return (
    <div className="size count py-[7rem] text-center">
      {counts.map((item, i) => (
        <div key={i} className="box py-8 relative">
          <span
            className="box absolute top-[-1.5rem] left-[43%] text-red-500
           bg-white w-[3rem] h-[3rem] grid place-items-center rounded-full"
          >
            {item.icon}
          </span>
          <h1 className="text-4xl font-bold">{item.total}</h1>
          <p className="capitalize text-gray-700 pt-2 text-md font-light">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Counts;
