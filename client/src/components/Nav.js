import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Close from "./Icons/Close"
import Document from "./Icons/Document"
import BurgerMenu from "./Icons/BurgerMenu"
const StyledUnderline = styled.li`
  &::after {
    background-color: ${props => props.color};
  }
`;

const StyledCloseBtn = styled.div`

    svg g line { 
      stroke: ${props => props.color}
    }
`;

function Nav(props) {
  let navItems = props.categories;
  const [navIsOpen, updateNav] = useState(false);

  return (
    <nav className="Nav">
      <div 
        id="menuIcon" 
        className={`Nav_list-menu Nav_list-menu--${navIsOpen && "hidden"}`}
        onClick={e => {
          updateNav(true);
        }}
      >
        <BurgerMenu />
        <p>filters</p>
      </div>
      <StyledCloseBtn
        color={props.color}
        id="closeIcon"
        className={`Nav_list-close Nav_list-close--${!navIsOpen && "hidden"}`}
        onClick={e => {
          updateNav(false);
        }}
      >
        <Close />
      </StyledCloseBtn>
      <ul className={`Nav_list ${!navIsOpen && "Nav_list--hidden"}`}>
        {navItems.map((item, index) => (
          <StyledUnderline
            color={props.color}
            onClick={() => {
              props.updateActiveCategory(item);
              updateNav(false)
            }}
            className={`Nav_list_item ${props.activeCategory === item &&
              "Nav_list_item--active"}`}
            key={index}
            data-filter={item}
          >
            {item}
          </StyledUnderline>
        ))}
      </ul>
      <a href="#Wishlist" className="Nav_Wishlist-check">
        <Document color={props.color} />
        <span id="cartCount" className="Nav_Wishlist-check_count">{props.wishlistCount}</span>
      </a>
    </nav>
  );
}

export default Nav;
