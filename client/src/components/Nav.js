import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Close from "./Icons/Close";
import Document from "./Icons/Document";
import BurgerMenu from "./Icons/BurgerMenu";
import { HashLink as Link } from "react-router-hash-link";
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

// position: ${(props) => (props.headerVisible ? "relative" : "fixed")};
// top: ${(props) => (props.headerVisible ? "initial" : 0)};
// height: ${(props) => (props.headerVisible ? "11rem" : "8rem")};
const StyledNav = styled.div`
  .Nav {
    position: ${(props) => props.position};
    top: ${(props) => props.top};
    height: ${(props) => props.height};

    &_list {
      transform: ${(props) => props.transform};
    }

    &_Wishlist {
      &-check {
        transform: translateY(-50%) ${(props) => props.transform};
      }
    }

    #menuIcon {
      transform: translateY(50%, -50%) ${(props) => props.transform};
    }
  }
  @media screen and (max-width: 1500px) {
    .Nav {
      height: ${(props) => props.height};
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
  console.log(window.innerWidth);
  return (
    <StyledNav
      headerVisible={props.headerVisible}
      position={props.headerVisible ? "relative" : "fixed"}
      top={props.headerVisible ? "initial" : 0}
      height={
        props.headerVisible
          ? window.innerWidth >= 1500
            ? "11rem"
            : "10rem"
          : window.innerWidth >= 1500
          ? "8rem"
          : "7.1rem"
      }
      transform={props.headerVisible ? "scale(1)" : "scale(.8)"}
    >
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
            <Link key={index} smooth to={`/${props.campaignTag}/#Showcase`} className="nav-link">
              <StyledUnderline
                color={props.color}
                onClick={() => {
                  props.updateActiveCategory(item);
                  updateNav(false);
                }}
                className={`Nav_list_item ${props.activeCategory === item &&
                  "Nav_list_item--active"}`}
                data-filter={item}
              >
                {item}
              </StyledUnderline>
            </Link>
          ))}
        </ul>{" "}
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
