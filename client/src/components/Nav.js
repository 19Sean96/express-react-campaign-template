import React from "react";

function Nav(props) {
  let navItems = props.categories;

  return (
    <nav className="Nav">
      <ul className="Nav_list">
        {navItems.map((item, index) => (
          <li
            onClick={() => {
              props.updateActiveCategory(item)

            }}
            className={`Nav_list_item ${
              props.activeCategory === item && "Nav_list_item--active"
            }`}
            key={index}
            data-filter={item}
          >
            {item}
          </li>
        ))}
      </ul>
      <a href="#Wishlist" className="Nav_Wishlist-check">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.534 61.545">
          <g transform="translate(-465 -4258)">
            <path
              d="M494.522,4317.545H467V4260h42.534v42.534A15.013,15.013,0,0,1,494.522,4317.545Z"
              transform="translate(0)"
              fill="none"
              stroke="#eae45b"
              strokeMiterlimit="10"
              strokeWidth="4"
            />
            <g transform="translate(478.259 4277.514)">
              <line
                x2="20"
                transform="translate(-0.259 0.486)"
                fill="none"
                stroke="#eae45b"
                strokeMiterlimit="10"
                strokeWidth="4"
              />
              <line
                x2="20"
                transform="translate(-0.259 10.486)"
                fill="none"
                stroke="#eae45b"
                strokeMiterlimit="10"
                strokeWidth="4"
              />
              <line
                x2="15"
                transform="translate(-0.259 20.486)"
                fill="none"
                stroke="#eae45b"
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
