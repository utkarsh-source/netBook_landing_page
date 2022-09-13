import React from "react";
import { Netbooks } from "../styles/Netbok";
import Image0 from "../assets/Image.png";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import { GoPrimitiveDot } from "react-icons/go";
import Image from "next/image";
import { MainHeading, Paragraph, SubHeading } from "../styles/Ui";

function Netboks() {
  return (
    <Netbooks>
      <main data-aos="zoom-in-up">
        <SubHeading>Whats Netboks</SubHeading>
        <MainHeading>Why Join to Netbook Social Network?</MainHeading>
        <Paragraph>
          Recent surveys have indicated that small businesses recognise the need
          they have to connect with consumer.
        </Paragraph>
        <ul>
          <li>
            <span>
              <GoPrimitiveDot />
            </span>
            Groups
          </li>
          <li>
            <span>
              <GoPrimitiveDot />
            </span>{" "}
            Messages
          </li>
          <li>
            <span>
              <GoPrimitiveDot />
            </span>{" "}
            Share
          </li>
        </ul>
      </main>
      <figure data-aos="zoom-in-up">
        <Image src={Image0} alt="Some Image" />
        <div>
          <figure>
            <Image src={Image2} alt="Some Image" />
          </figure>
          <figure>
            <Image src={Image1} alt="Some Image" />
          </figure>
        </div>
      </figure>
    </Netbooks>
  );
}

export default Netboks;
