import React from "react";
import SearchBar from "./SearchBar";

const MyHeader = () => {
  return (
    <>
      <div className="h-16 w-screen flex">
        <div className="flex">
          <img
            src="https://app.rahasyavedicastrology.com/_next/static/media/rva.0c5036ce.svg"
            alt="logo"
            className="w-20 h-20"
          />
          <h5>Charts</h5>
          <h5>Graphs</h5>
          <h5>Dasha</h5>
          <h5>KP Tables</h5>
          <h5>Aspects</h5>
          <h5>Strength</h5>
          
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default MyHeader;
