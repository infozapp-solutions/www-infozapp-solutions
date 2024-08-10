import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Input = ({ type, placeholder, value, onchange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onchange}
      className="w-full border border-gray-400 py-3 px-2 rounded-md outline-none
      focus:border-black text-sm"
      required
    />
  );
};

const Form = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    // The keys for templateParams has been taken from https://dashboard.emailjs.com/admin/templates/lu803pq
    const templateParams = {
      from_name: input.fullName,
      from_email: input.email,
      to_name: 'Foznik Info Solutions',
      message: input.message,
      reply_to: input.email
    }
    // TODO: Going forward send email must be moved to back end service.
    emailjs
      .send('service_2ota45o', 'template_85ia5ao', templateParams, {
        publicKey: 'iN7G4j2bbnv2OrmVz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.alert('Your message sent successfully');
          setInput({
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form onSubmit={onSubmit} className="bg-white box p-6 flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row gap-5">
        <Input
          type="text"
          placeholder="Your Name"
          value={input.fullName}
          onchange={(e) => setInput({ ...input, fullName: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={input.email}
          onchange={(e) => setInput({ ...input, email: e.target.value })}
        />
      </div>
      <Input
        type="text"
        placeholder="Subject"
        value={input.subject}
        onchange={(e) => setInput({ ...input, subject: e.target.value })}
      />
      <textarea
        className="w-full border border-gray-400 py-3 px-2 rounded-md outline-none 
        focus:border-black text-sm"
        cols="10"
        rows="6"
        placeholder="Your Message"
        value={input.message}
        onChange={(e) => setInput({ ...input, message: e.target.value })}
        required
      ></textarea>

      <div className="text-center">
        <button className="bg-red-500 text-white py-2 px-7 rounded-md hover:opacity-95">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Form;
