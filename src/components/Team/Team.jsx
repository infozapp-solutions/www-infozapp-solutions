import React from "react";
import { team } from "./data";
import SingleTeam from "./SingleTeam";
import "./Team.scss";

const Team = () => {
  return (
    <div className="clipBg mt-[5rem] text-white">
      <div className="size">
        <div className="text-center">
          <h1
            className="text-4xl pb-4 uppercase font-semibold relative after:content-[''] inline-block
            after:border-b-[3px] after:border-red-500 after:w-12  after:bottom-0  after:left-1/3 after:absolute"
          >
            Team
          </h1>
          <p className="py-3 text-base">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          </p>
        </div>

        <div className="teamCard mt-[1rem]">
          {team.map((member, i) => (
            <SingleTeam member={member} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
