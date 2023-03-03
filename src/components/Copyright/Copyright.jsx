import React from "react";
import { icons } from "./data";

const Copyright = () => {
  return (
    <div className="bg-black text-white">
      <div className="size py-5 flex justify-between flex-col sm:flex-row gap-5">
        <div className="text-sm leading-6">
          <p>
            © Copyright <strong>Presento.</strong> All Rights Reserved
          </p>
          <p>
            Designed by <span className="text-red-500">BootstrapMade</span>
          </p>
        </div>

        <div className="flex gap-2">
          {icons.map((icon, i) => (
            <a
              key={i}
              className="w-[2.2rem] h-[2.2rem] bg-card grid place-items-center
              hover:bg-red-500"
              href={icon.path}
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Copyright;
