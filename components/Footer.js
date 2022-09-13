import React from "react";
import { Column, Copyright, FooterSection } from "../styles/Ui";

import { BsTwitter, BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import Image from "next/image";
import logo from "../assets/Group.svg";
const HomeMenu = ["Home", "Community", "Events", "Contact"];
const Resources = ["Blogs", "News", "Guides", "Help Center"];
const Community = ["NewsFeed", "Profile", "Friends", "Forums"];
const MainLinks = ["Members", "Activity", "Groups", "Private Group"];

function Footer() {
  return (
    <>
      <FooterSection>
        <Column>
          <span className="header">Home</span>
          {HomeMenu.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </Column>
        <Column>
          <span className="header">Resources</span>

          {Resources.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </Column>
        <Column>
          <span className="header">Community</span>

          {Community.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </Column>
        <Column>
          <span className="header">Main links</span>

          {MainLinks.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </Column>
        <div>
          <h1>
            Subscribe Cirkle <br /> Newsletter
          </h1>
          <p>
            Subscribe to be the first one to know <br /> about updates. Enter
            your email
          </p>
          <form>
            <input placeholder="Email Address" />
            <button>Subscribe</button>
          </form>
        </div>
      </FooterSection>
      <Copyright>
        <p>Utkarsh Agrawal</p>
        <div className="logo_wrapper">
          <figure>
            <Image
              layout="fill"
              style={{ flexShrink: 0 }}
              src={logo}
              alt={"Logo"}
            />
          </figure>
          <span>Notebook</span>
        </div>
        <div>
          <BsTwitter />
          <BsGithub />
          <BsLinkedin />
          <BsFacebook />
        </div>
      </Copyright>
    </>
  );
}

export default Footer;
