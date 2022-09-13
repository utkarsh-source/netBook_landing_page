import React from "react";
import { MainHeading, NewsSection, SubHeading } from "../styles/Ui";
import checkers from "../assets/checkers.png";
import people from "../assets/people.png";
import lap from "../assets/lap.png";
import Image from "next/image";
import Line from "../assets/Line.svg";
import { BsArrowRightShort } from "react-icons/bs";

function News() {
  return (
    <NewsSection>
      <div data-aos="zoom-out">
        <SubHeading>Get Our Aplication</SubHeading>
        <MainHeading>Latest News</MainHeading>
      </div>
      <main data-aos="zoom-out">
        <figure>
          <Image src={checkers} alt="checkers image" />
          <div>
            <figure>
              <Image src={Line} alt="line" />
            </figure>
            <div>
              <p>We Optimised Netbooks Better Navigation</p>
              <span>
                Continue Reading <BsArrowRightShort />
              </span>
            </div>
          </div>
        </figure>
        <figure>
          <Image src={people} alt="people image" />
          <div>
            <figure>
              <Image src={Line} alt="line" />
            </figure>
            <div>
              <p>Netbook Network Added New Photo Filter</p>
              <span>
                Continue Reading <BsArrowRightShort />
              </span>
            </div>
          </div>
        </figure>
        <figure>
          <Image src={lap} alt="laptop image" />
          <div>
            <figure>
              <Image src={Line} alt="line" />
            </figure>
            <div>
              <p>It Does Not Matter Hows Slowly go as Long</p>
              <span>
                Continue Reading <BsArrowRightShort />
              </span>
            </div>
          </div>
        </figure>
      </main>
    </NewsSection>
  );
}

export default News;
