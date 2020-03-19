import React from "react";
import SportexLogo from "../Icons/SportexLogo";
import Mouse from "./Icons/Mouse"
import Letter from "./Icons/Letter"
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
            <Mouse color={props.color}/>
          </span>
          <p className="footer_link-site_par">visit us</p>
          
        </a>
        <a href="#ContactForm" className="footer_link-email">

          <span className="footer_link-email_icon">
            <Letter color={props.color} />
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
