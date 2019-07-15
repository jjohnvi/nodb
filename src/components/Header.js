import React from "react";
import OutputInput from "./OutputInput";

function Header(props) {
  return (
    <header className="Header">
      <h1 className="hh1">
        <p className="title" onClick={props.viewHome}>
          <OutputInput text="WiseMind." />
        </p>
      </h1>
    </header>
  );
}

export default Header;
