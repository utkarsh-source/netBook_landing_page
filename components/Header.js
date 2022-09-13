import React from "react";
import logo from "../assets/Group.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import { Button, FlexCenter, Header as WebHeader } from "../styles/Ui";
import { BiMenu, BiSearchAlt } from "react-icons/bi";
import Image from "next/image";

const navMenu = [
  { to: "Home", withDropdown: false },
  { to: "Community", withDropdown: true },
  { to: "Blog", withDropdown: false },
  { to: "Events", withDropdown: false },
];

const Header = () => {
  return (
    <WebHeader>
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
      <nav>
        <ul>
          {navMenu.map((navItem, index) => {
            return (
              <li key={index}>
                {navItem.to}
                {navItem.withDropdown && <RiArrowDownSLine />}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="input_box">
        <BiSearchAlt />
        <input type="text" placeholder="Search here..." />
      </div>
      <Button primary>Log In</Button>
      <BiMenu className="menu_bar" />
    </WebHeader>
  );
};

export default Header;
