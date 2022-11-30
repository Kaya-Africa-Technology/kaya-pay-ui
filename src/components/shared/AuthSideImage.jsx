import React from "react";

const AuthSideImage = ({ image, text }) => {
  console.log(image);
  return (
    <div
      className="width-1/2 from-transparent via-transparent to-slate-800 hidden flex-1 items-end bg-gradient-to-b bg-cover bg-center bg-no-repeat lg:flex"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <p className="mb-[90px] break-words px-10 align-text-bottom font-lato text-xl text-white">
        {text}
      </p>
    </div>
  );
};
// /images/trucks.jpg
// Save delivery costs and increase driver efficiency with our end-to-end
// Pickup and delivery software.
export default AuthSideImage;
