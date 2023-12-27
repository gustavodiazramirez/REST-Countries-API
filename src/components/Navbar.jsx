import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-300 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between ml-32 p-4">
          <h1 className="nunito-sans text-xl font-bold">Where in the world?</h1>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
