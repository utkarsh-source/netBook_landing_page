import React from "react";
import { AchievementSection } from "../styles/Achievement";
import { Button, Card, MainHeading, Paragraph, SubHeading } from "../styles/Ui";
import { BsArrowRightShort, BsStar, BsTrophy } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import face1 from "../assets/face1.png";
import face2 from "../assets/face2.png";
import face3 from "../assets/face3.png";
import Image from "next/image";

function Achievement() {
  return (
    <AchievementSection>
      <div data-aos="fade-down" data-aos-duration={700}>
        <Card>
          <h2>
            {" "}
            <BsStar /> 4.8 Rating
          </h2>
          <div>
            <div className="figure_wrapper">
              <figure className="image_wrapper">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={face1}
                  alt="Members"
                />
              </figure>
              <div className="image_wrapper">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={face2}
                  alt="Members"
                />
              </div>
              <figure className="image_wrapper">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={face3}
                  alt="Members"
                />
              </figure>
            </div>

            <p>
              <span>+836k</span>Members
            </p>
          </div>
          <Paragraph>
            More than 2 billion we people over countries use socibooks we to
            stay in touch with friends.
          </Paragraph>
          <SubHeading>
            Join Our Community{" "}
            <BsArrowRightShort style={{ marginLeft: "10px" }} />
          </SubHeading>
        </Card>
        <Card>
          <h2>
            {" "}
            <BsTrophy /> Awwwards
          </h2>
          <div>
            <ImGithub />
            <p>
              <span>+836k</span>Members
            </p>
          </div>
          <Paragraph>
            More than 2 billion we people over countries use socibooks we to
            stay in touch with friends.
          </Paragraph>
          <SubHeading secondary>
            Go to Awards <BsArrowRightShort style={{ marginLeft: "10px" }} />
          </SubHeading>
        </Card>
      </div>
      <main data-aos="fade-up" data-aos-duration={700}>
        <SubHeading>Our Achievement</SubHeading>
        <MainHeading>We are Connecting You The Digital Life.</MainHeading>
        <Paragraph>
          The scope the Social Media becomes crucial Is helps the business to
          directly engage with their needs and wants.
        </Paragraph>
        <Button primary>
          Discover me <BsArrowRightShort />
        </Button>
      </main>
    </AchievementSection>
  );
}

export default Achievement;
