import React from "react";
import { BannerSection } from "../styles/BannerUI";
import bannerImage from "../assets/bannerImage.svg";
import Image from "next/image";
import Header from "./Header";
import { Button, ButtonWrapper } from "../styles/Ui";

function Banner() {
  return (
    <BannerSection className="banner_section">
      <Header />
      <div>
        <main data-aos="zoom-in-left" data-aos-duration="400">
          <span>Netbook community</span>
          <h1>Your Solutions For Community!</h1>
          <p>
            More than 2 billion people in over countries use socibook to stay in
            touch with friends & family.
          </p>
          <ButtonWrapper>
            <Button primary>About More</Button>
            <Button>Invite Friend</Button>
          </ButtonWrapper>
        </main>
        <figure data-aos="zoom-in-right" data-aos-duration="400">
          <Image src={bannerImage} alt="bannerImage" />
        </figure>
      </div>
    </BannerSection>
  );
}

export default Banner;
