import React from "react";
import SportexLogo from "../Icons/SportexLogo";

function Header(props) {
  return (
    <header className="header" style={{
      backgroundImage: `url("${props.bg}")`
      }}>
      <div className="brand-indicator">
        <p>campaign items for order</p>
        <h1 className="brand-indicator_name">{props.clientInfo.name}</h1>
      </div>
      <div className="sportex-indicator">
        <h6 className="sportex-indicator_text">powered by</h6>

        <SportexLogo
          prefix=""> </SportexLogo>
      </div>
      <img
        src={props.clientInfo.logo}
        alt="Brand Logo"
        className="brand-logo"
      />
    </header>
  );
}

export default Header;
