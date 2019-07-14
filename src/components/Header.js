import React from "react";
import OutputInput from "./OutputInput";

function Header() {
  return (
    <header className="Header">
      <h1 className="Title">
        <OutputInput text="WiseMind" />
      </h1>
    </header>
  );
}

export default Header;
