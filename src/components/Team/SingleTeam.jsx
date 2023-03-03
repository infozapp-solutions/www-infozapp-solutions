import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SingleTeam = ({ member }) => {
  const icons = [
    {
      icon: <InstagramIcon sx={{ fontSize: "1.3rem" }} />,
      path: "#",
    },
    {
      icon: <FacebookIcon sx={{ fontSize: "1.3rem" }} />,
      path: "#",
    },
    {
      icon: <TwitterIcon sx={{ fontSize: "1.3rem" }} />,
      path: "#",
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: "1.3rem" }} />,
      path: "#",
    },
  ];
  return (
    <div
      className="bg-white text-black rounded-md overflow-hidden
       card relative"
    >
      <img className="w-full" src={member.img} alt="memberImg" />
      <div className="px-3 py-5">
        <h1 className="font-raleway font-bold text-xl capitalize">
          {member.member}
        </h1>
        <p className="text-gray-400 text-sm capitalize">{member.position}</p>
      </div>

      <div
        className="absolute bottom-24 z-10 flex items-center 
        gap-1 justify-center left-0 right-0 socialIcon"
      >
        {icons.map((icon, i) => (
          <span key={i}>
            <a className="team_icon" href={icon.path}>
              {icon.icon}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleTeam;
