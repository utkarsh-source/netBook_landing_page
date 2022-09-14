import React from "react";
import {
  CommunityCard,
  MainHeading,
  Paragraph,
  SectionWrapper,
  SubHeading,
} from "../styles/Ui";
import Image from "next/image";
import icon from "../assets/Icon.svg";
import icon1 from "../assets/Icon1.svg";
import icon2 from "../assets/Icon2.svg";
import icon3 from "../assets/Icon3.svg";
import icon4 from "../assets/Icon4.svg";
import icon5 from "../assets/Icon5.svg";

const CommunityCardDetail = [
  {
    heading: "Members, Friends",
    text: "Members, Friends Connection ( like followers ), Private Message",
    image: icon,
  },
  {
    heading: "Groups",
    text: "Your users can create groups to let other users to join and talk",
    image: icon1,
  },
  {
    heading: "Forum",
    text: "Forum is ready by BBPress. Your users can make topics and talk.",
    image: icon2,
  },
  {
    heading: "Custom Module",
    text: "You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.",
    image: icon3,
  },
  {
    heading: "List Builder",
    text: "Members, Groups list can be modified by drag & drop live builder.",
    image: icon4,
  },
  {
    heading: "List Scroll Effects",
    text: "8 different scroll effects are ready. You can always change by your tastes.",
    image: icon5,
  },
];

function Community() {
  return (
    <SectionWrapper>
      <div>
        <SubHeading>Our Community</SubHeading>
        <MainHeading>Community Main Feature</MainHeading>
        <Paragraph>
          The wise man therefore always holds in these matters to this principle
          of selection.
        </Paragraph>
      </div>
      <main className="community_main">
        {CommunityCardDetail.map(({ heading, text, image }, index) => {
          return (
            <CommunityCard
              key={index}
              data-aos={index % 2 ? "fade-left" : "fade-right"}
              data-aos-duration={700}
            >
              <figure>
                <Image layout="fill" objectFit="cover" src={image} alt="icon" />
              </figure>
              <div>
                <h1>{heading}</h1>
                <p>{text}</p>
              </div>
            </CommunityCard>
          );
        })}
      </main>
    </SectionWrapper>
  );
}

export default Community;
