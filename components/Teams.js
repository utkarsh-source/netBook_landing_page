import React from "react";
import borderImage from "../assets/borderImage.svg";
import face1 from "../assets/face1.png";
import face2 from "../assets/face2.png";
import face3 from "../assets/face3.png";
import face4 from "../assets/face4.png";
import Image from "next/image";
import {
  MainHeading,
  Paragraph,
  SectionWrapper,
  SubHeading,
} from "../styles/Ui";

function Teams() {
  return (
    <SectionWrapper style={{ background: "none" }}>
      <div>
        <SubHeading>Valuable Team</SubHeading>
        <MainHeading>Our Active Members</MainHeading>
        <Paragraph>
          when an unknown printer took a galley of type and meeting fari
          scrambled it.
        </Paragraph>
      </div>
      <main data-aos="zoom-in" data-aos-duration={500} className="team_members">
        <div>
          <figure>
            <div className="borderImage">
              <Image objectFit="cover" src={borderImage} alt="borderImage" />
            </div>

            <Image src={face1} alt="image" />
          </figure>
          <h1>Fahim Rahman</h1>
          <h2>@Rahman</h2>
        </div>

        <div>
          <figure>
            <div className="borderImage">
              <Image objectFit="cover" src={borderImage} alt="borderImage" />
            </div>

            <Image src={face2} alt="image" />
          </figure>
          <h1>Kazi Rahman</h1>
          <h2>@Rahman</h2>
        </div>

        <div>
          <figure>
            <div className="borderImage">
              <Image objectFit="cover" src={borderImage} alt="borderImage" />
            </div>

            <Image src={face3} alt="image" />
          </figure>
          <h1>Masterero Ali</h1>
          <h2>@Master</h2>
        </div>

        <div>
          <figure>
            <div className="borderImage">
              <Image objectFit="cover" src={borderImage} alt="borderImage" />
            </div>

            <Image src={face4} alt="image" />
          </figure>
          <h1>Alia Karon</h1>
          <h2>@Alia</h2>
        </div>
      </main>
    </SectionWrapper>
  );
}

export default Teams;
