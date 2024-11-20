import React from "react";
import "../Footer/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className=" footer-main-container">
      <div className="footer_ion_container">
        <ul>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
        </ul>
      </div>
      <div className="footer_foot_Note_container">
        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards </li>
          <li>Media Ceneter </li>
          <li>Investor Relations </li>
          <li>Jobs </li>
          <li>Terms of Use </li>
          <li>Privacy </li>
          <li>Legal Notices </li>
          <li>Cookie Preferences</li>
          <li>Corpoarate Information </li>
          <li>Contact Us </li>
        </ul>
        <ul></ul>
        <ul></ul>
      </div>
      <div className="footer_service_code_container">
        {" "}
        <button className="Service_code">Service Code</button>
      </div>
      <div className="footer_copyright-container">
        © 1997-2024 Netflix, Inc.
      </div>
    </div>
  );
}

export default Footer;
