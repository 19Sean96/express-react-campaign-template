import React from "react";
import SportexLogo from "../Icons/SportexLogo";
import styled from "styled-components";

// min-width: ${props => props.logoWidth * .8}px;
// width: ${props => (props.logoWidth * 1.16) / 20}vw;
const StyledLogo = styled.img`
  max-width: ${props => props.logoWidth}px;

  @media screen and (max-width: 1300px) {
    max-width: ${props => props.logoWidth * .8}px;
  }
`;

function Header(props) {
  return (
    <header id="Header" className="header" style={{
      backgroundImage: `url("${props.clientInfo.background}")`
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
      <StyledLogo
        src={props.clientInfo.logo}
        alt="Brand Logo"
        className="brand-logo"
        logoWidth={props.clientInfo.logoWidth}
        onContextMenu={(e)=> e.preventDefault()}
      />
    </header>
  );
}

export default Header;
