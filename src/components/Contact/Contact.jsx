import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import TtyOutlinedIcon from "@mui/icons-material/TtyOutlined";
import Form from "./Form";

const Address = ({ icon, title, sub1, sub2 }) => {
  return (
    <>
      <div className="w-full box bg-white py-6 grid place-items-center">
        <span
          className="border-dotted border-2 border-red-200 rounded-full
            w-[3.2rem] h-[3.2rem] grid place-items-center text-red-500"
        >
          {icon}
        </span>

        <h1 className="font-raleway text-xl py-3 font-bold text-gray-500">
          {title}
        </h1>
        <p className="text-sm text-gray-600 font-medium">{sub1}</p>
        <p className="text-sm text-gray-600 font-medium">{sub2 && sub2}</p>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <div className="size py-16">
      <div className="text-center">
        <h1
          className="text-4xl pb-4 uppercase font-semibold relative after:content-[''] inline-block
            after:border-b-[3px] after:border-red-500 after:w-12  after:bottom-0  after:left-1/3 after:absolute"
        >
          Contact
        </h1>
        <p className="py-3 text-base">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
        </p>
      </div>

      <div className="h-full flex flex-col lg:flex-row gap-5 mt-5">
        <div className="flex-1">
          <Address
            icon={<LocationOnOutlinedIcon sx={{ fontSize: "2rem" }} />}
            title="Our Address"
            sub1="A108 Adam Street, New York, NY 535022"
          />

          <div className="flex items-center gap-5 mt-5">
            <Address
              icon={<MailOutlineOutlinedIcon sx={{ fontSize: "2rem" }} />}
              title="Email Us"
              sub1="info@example.com"
              sub2="contact@example.com"
            />
            <Address
              icon={<TtyOutlinedIcon sx={{ fontSize: "2rem" }} />}
              title="Call Us"
              sub1="+1 5589 55488 55"
              sub2="+1 6678 254445 41"
            />
          </div>
        </div>

        {/* contact form  */}
        <div className="flex-1">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
