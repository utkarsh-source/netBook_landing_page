import React from "react";
import {
  ApplicationWrapper,
  ButtonWrapper,
  MainHeading,
  Paragraph,
  SubHeading,
} from "../styles/Ui";
import mobileSvg from "../assets/mobile.svg";
import Image from "next/image";
import appStore from "../assets/apple.png";
import playStore from "../assets/google.png";

function Application() {
  return (
    <ApplicationWrapper>
      <main data-aos="fade-right" data-aos-duration="500">
        <SubHeading>Get Our Application</SubHeading>
        <MainHeading>You Can Easily Find This App…!</MainHeading>
        <Paragraph>
          I say chap that’s suing lavatory chip shop gosh off his smashing boot
          are you taking the piss posh loo brilliant.
        </Paragraph>
        <div className="button_wrapper">
          <div>
            <figure>
              <Image src={appStore} alt="appStore" />
            </figure>
            <div>
              <p>Download on the</p>
              <strong>App Store</strong>
            </div>
          </div>
          <div>
            <figure>
              <Image src={playStore} alt="playStore" />
            </figure>
            <div>
              <p>Download on the</p>
              <strong>Play Store</strong>
            </div>
          </div>
        </div>
      </main>
      <figure data-aos="fade-left" data-aos-duration="500">
        <Image src={mobileSvg} alt="mobile application" />
      </figure>
    </ApplicationWrapper>
  );
}

export default Application;
