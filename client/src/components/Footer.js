import React from "react";
import SportexLogo from "../Icons/SportexLogo";

function Footer(props) {
  return (
    <footer className="footer">
      <aside className="footer_link">
        <a
          rel="noopener noreferrer"
          href="https://sportexsafety.com"
          target="_blank"
          className="footer_link-site"
        >
          <span className="footer_link-site_icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 48.5">
              <g transform="translate(-949.5 -3707)">
                <path
                  d="M964,3754h0a13,13,0,0,1-13-13v-17.286a24.608,24.608,0,0,1,26,0V3741A13,13,0,0,1,964,3754Z"
                  fill="none"
                  stroke={props.color}
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
                <path
                  d="M964,3733v-15.989a4.055,4.055,0,0,1,4.062-4.011h4.872a4.01,4.01,0,0,0,4.066-4v-2"
                  fill="none"
                  stroke={props.color}
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
              </g>
            </svg>
          </span>
          <p className="footer_link-site_par">visit us</p>
        </a>
        <a href="#ContactForm" className="footer_link-email">
          <span className="footer_link-email_icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 37">
              <g transform="translate(1.5 1.5)">
                <path
                  d="M379,1636H349a8,8,0,0,1-8-8v-26h46v26A8,8,0,0,1,379,1636Z"
                  transform="translate(-341 -1602)"
                  fill="none"
                  stroke={props.color}
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
                <path
                  d="M346.293,1607.952,364,1624l17.807-16.073"
                  transform="translate(-341 -1602)"
                  fill="none"
                  stroke={props.color}
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
              </g>
            </svg>
          </span>
          <p className="footer_link-site_par">email us</p>
        </a>
      </aside>
      <aside className="footer_cta">
        <h3 className="footer_cta_title">questions?</h3>
        <h4 className="footer_cta_subtitle">
          call us at{" "}
          <a
            style={{ color: props.color }}
            href="tel:+1800-486-8677"
            className="footer_cta_link"
          >
            1.800.486.8677
          </a>
        </h4>
      </aside>
      <aside className="footer_sportex-indicator">
        <h6 className="footer_sportex-indicator_text">powered by</h6>

        <SportexLogo prefix="footer_"> </SportexLogo>
      </aside>
      <p className="footer_disclosure">
        © Sportex Safety // Sportex Apparel of Arizona All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
