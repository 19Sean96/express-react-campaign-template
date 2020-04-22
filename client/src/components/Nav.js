import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Close from "./Icons/Close";
import Document from "./Icons/Document";
import BurgerMenu from "./Icons/BurgerMenu";
const StyledUnderline = styled.li`
  &::after {
    background-color: ${(props) => props.color};
  }
`;

const StyledCloseBtn = styled.div`
  svg g line {
    stroke: ${(props) => props.color};
  }
`;

const StyledNav = styled.div`
  .Nav {
    position: ${(props) => (props.headerVisible ? "relative" : "fixed")};
    top: ${(props) => (props.headerVisible ? "initial" : 0)};
    height: ${(props) => (props.headerVisible ? "11rem" : "8rem")};

    &_list {
      transform: scale(${props => props.headerVisible ? 1 : .8})
    }

    &_Wishlist {

      &-check {
        transform: translateY(-50%) ${props => props.headerVisible ? "scale(1)" : "scale(.8)"}
      }
    }

    #menuIcon {
      transform: translateY(50%,-50%) scale(${props => props.headerVisible ? 1 : .8})
    }
  }
  @media screen and (max-width: 1500px) {
    .Nav {
      height: ${(props) => (props.headerVisible ? "10rem" : "7.1rem")};
    }
  }
  @media screen and (max-width: 1025px) {
    .Nav_list {
      transform: scale(1);
    }
  }
`;

function Nav(props) {
  let navItems = props.categories;
  const [navIsOpen, updateNav] = useState(false);

  return (
    <StyledNav headerVisible={props.headerVisible}>
      <nav className="Nav" headerVisible={props.headerVisible}>
        <div
          id="menuIcon"
          className={`Nav_list-menu Nav_list-menu--${navIsOpen && "hidden"}`}
          onClick={(e) => {
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
          onClick={(e) => {
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
                updateNav(false);
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
          <span id="cartCount" className="Nav_Wishlist-check_count">
            {props.wishlistCount}
          </span>
        </a>
      </nav>
    </StyledNav>
  );
}

export default Nav;
