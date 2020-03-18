import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledUnderline = styled.div`
  &::after {
    background-color: ${props => props.accentColor};
  }
`;

const StyledCloseBtn = styled.div`

    svg g line { 
      stroke: ${props => props.accentColor}
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.414 29.414">
          <g
          >
            <line x2="30" fill="none" stroke="#fff" strokeWidth="2" />
            <line x2="20" fill="none" stroke="#fff" strokeWidth="2" />
            <line x2="10" fill="none" stroke="#fff" strokeWidth="2" />
          </g>
        </svg>
        <p>filters</p>
      </div>
      <StyledCloseBtn
        accentColor={props.accentColor}
        id="closeIcon"
        className={`Nav_list-close Nav_list-close--${!navIsOpen && "hidden"}`}
        onClick={e => {
          updateNav(false);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.414 29.414">
          <g id="Cross">
            <line
              x2="28"
              y2="28"
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              y1="28"
              x2="28"
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </g>
        </svg>
      </StyledCloseBtn>
      <ul className={`Nav_list ${!navIsOpen && "Nav_list--hidden"}`}>
        {navItems.map((item, index) => (
          <StyledUnderline
            accentColor={props.accentColor}
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.534 61.545">
          <g transform="translate(-465 -4258)">
            <path
              d="M494.522,4317.545H467V4260h42.534v42.534A15.013,15.013,0,0,1,494.522,4317.545Z"
              transform="translate(0)"
              fill="none"
              stroke={props.accentColor}
              strokeMiterlimit="10"
              strokeWidth="4"
            />
            <g transform="translate(478.259 4277.514)">
              <line
                x2="20"
                transform="translate(-0.259 0.486)"
                fill="none"
                stroke={props.accentColor}
                strokeMiterlimit="10"
                strokeWidth="4"
              />
              <line
                x2="20"
                transform="translate(-0.259 10.486)"
                fill="none"
                stroke={props.accentColor}
                strokeMiterlimit="10"
                strokeWidth="4"
              />
              <line
                x2="15"
                transform="translate(-0.259 20.486)"
                fill="none"
                stroke={props.accentColor}
                strokeMiterlimit="10"
                strokeWidth="4"
              />
            </g>
          </g>
        </svg>
        <span className="Nav_Wishlist-check_count">{props.wishlistCount}</span>
      </a>
    </nav>
  );
}

export default Nav;
