import styled, { css } from "styled-components";
import { devices } from "./theme";

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 100px;
  border-bottom: 1px solid ${(props) => props.theme.lightBlack};
  @media ${devices.laptop} {
    padding: 20px;
  }
  @media ${devices.mobileL} {
    padding: 10px 20px;
    justify-content: space-between;
  }
  & > .menu_bar {
    font-size: 4rem;
    cursor: pointer;
    display: none;
    margin-left: 25px;
    @media ${devices.tablet} {
      display: inline-block;
    }
    @media ${devices.mobileL} {
      display: inline-block;
    }
  }
  & > .logo_wrapper {
    display: flex;
    align-items: center;
    width: max-content;
    & > figure {
      position: relative;
      width: 5rem;
      height: 5rem;
    }
    & > span {
      font-size: 2rem;
      font-weight: bold;
      margin-left: 5px;
      display: inline-block;
    }
  }

  & > nav {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    width: max-content;
    margin-left: 50px;
    margin-right: auto;
    @media ${devices.tablet} {
      display: none;
    }
    @media ${devices.mobileL} {
      display: none;
    }
    & > ul {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      & > li {
        display: flex;
        align-items: center;
        column-gap: 8px;
        padding: 5px 10px;
        font-size: 14px;
        transition: color, transform 0.07s linear;
        cursor: pointer;
        &:hover {
          transform: translateY(-5px);
          color: ${(props) => props.theme.waterBlue};
        }
        &:not(:last-child) {
          margin-right: 10px;
        }
        & > svg {
          font-size: 20px;
        }
      }
    }
  }
  & > .input_box {
    display: flex;
    align-items: center;
    width: max-content;
    margin-right: 20px;
    padding: 13px 0;
    border-bottom: 1px solid ${(props) => props.theme.lightBlack};
    column-gap: 5px;
    margin-right: 40px;
    @media ${devices.tablet} {
      margin-left: auto;
    }
    @media ${devices.mobileL} {
      display: none;
    }
    & > svg {
      font-size: 20px;
      color: ${(props) => props.theme.burnBlack};
      margin-right: 10px;
    }
    & > input {
      color: ${(props) => props.theme.burnBlack};
      width: 10rem;
      background: transparent;
      &::placeholder {
      }
    }
  }
`;

export const Button = styled.button`
  border-radius: 14px;
  padding: 15px 35px;
  background-color: white;
  color: ${(props) => props.theme.waterBlue};
  border: 1px solid ${(props) => props.theme.waterBlue};
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: pointer;
  cursor: pointer;
  @media ${devices.mobileL} {
    padding: 10px 15px;
    border-radius: 10px;
    margin-left: auto;
  }
  & > svg {
    font-size: 16px;
  }
  ${(props) => {
    if (props.primary) {
      return css`
        background-color: ${(props) => props.theme.waterBlue};
        color: white;
      `;
    }
  }}
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${(props) => props.columnGap || "10px"};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const SubHeading = styled.h2`
  color: ${(props) =>
    props.secondary ? props.theme.burnBlack : props.theme.waterBlue};
  font-size: 1.8rem;
  margin-bottom: 4px;
  & > svg {
    color: ${(props) =>
      props.secondary ? props.theme.burnBlack : props.theme.waterBlue};
  }
`;

export const MainHeading = styled.h1`
  font-size: 3.6rem;
  line-height: 4.8rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.dirtyBlack};
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.burnBlack};
  font-size: 1.6rem;
  line-height: 2.8rem;
  margin-bottom: 2.5rem;
`;

export const Card = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.lightBlack};
  border-radius: 10px;
  padding: 35px;
  width: 35rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${devices.mobileL} {
    width: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    border-radius: 10px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity 0.07s linear;
  }
  &:hover {
    border: 1px solid transparent;
    &::after {
      opacity: 1;
    }
  }

  & > h2 {
    display: flex;
    align-items: center;
    font-size: 2rem;
    margin-bottom: 2.5rem;
    & > svg {
      font-size: 2.5rem;
      color: ${(props) => props.theme.waterBlue};
      margin-right: 20px;
    }
  }
  & > div {
    position: relative;
    display: flex;
    align-items: center !important;
    column-gap: 20px;
    margin-bottom: 15px;
    & > svg {
      font-size: 30px;
      color: red;
    }
    & > .figure_wrapper {
      position: relative;
      display: flex;
      align-items: center;
      & > .image_wrapper {
        position: relative;
        border-radius: 100%;
        width: 4.5rem;
        height: 4.5rem;
        border: 3px solid white;
        object-fit: cover;
        &:not(:first-child) {
          margin-left: -15px;
        }
      }
    }
    & > p {
      height: max-content;
      font-size: 1.6rem;
      color: rgba(93, 91, 112, 1);
      span {
        color: ${(props) => props.theme.waterBlue};
        padding-right: 10px;
        font-weight: 600;
      }
    }
  }
`;

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  background: linear-gradient(
    0deg,
    rgba(241, 246, 253, 0) 1.63%,
    #f1f6fd 20.5%,
    #f1f6fd 58.57%,
    #ffffff 100%
  );
  overflow: hidden;
  @media ${devices.mobileL} {
    flex-direction: column;
    gap: 10px;
    padding: 50px 20px;
  }

  & > div {
    text-align: center;
    margin-bottom: 40px;
    max-width: 48rem;
  }

  & > .team_members {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 40px;
    @media ${devices.laptop} {
      gap: 20px;
    }
    @media ${devices.mobileL} {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
    & > div {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid ${(props) => props.theme.lightBlack};
      border-radius: 10px;
      padding: 25px 40px;
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 0;
      min-width: 25rem;
      &::after {
        content: "";
        position: absolute;
        border-radius: 10px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.08);
        opacity: 0;
        transition: opacity 0.1s linear;
      }

      &:hover {
        border: 1px solid transparent;
        &::after {
          opacity: 1;
        }
      }

      & > h1 {
        color: ${(props) => props.theme.dirtyBlack};
        font-size: 18px;
        margin-bottom: 8px;
      }
      & > h2 {
        color: ${(props) => props.theme.burnBlack};
        font-size: 14px;
      }
      & > figure {
        position: relative;
        height: 16rem;
        width: auto;
        margin-bottom: 20px;
        .borderImage {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 15rem;
          height: auto;
          transform: translate(-50%, -50%) scale(1.1);
          z-index: 10;
        }
      }
    }
  }
  & > .community_main {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    padding-bottom: 40px;
    @media ${devices.laptop} {
      gap: 20px;
    }
    @media ${devices.tabletL} {
      width: 100%;
    }
    @media ${devices.tablet} {
      width: 100%;
    }
    @media ${devices.mobileL} {
      gap: 20px;
    }
  }
`;

export const CommunityCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  min-width: 30rem;
  max-width: 38rem;
  border: 1px solid ${(props) => props.theme.lightBlack};
  @media ${devices.laptop} {
    flex-direction: column;
  }
  @media ${devices.tabletL} {
    min-width: 100%;
    flex-direction: row;
  }
  @media ${devices.tablet} {
    min-width: 100%;
    flex-direction: row;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    padding: 10px;
  }

  & > figure {
    position: relative;
    object-fit: cover;
    width: 9rem;
    height: 9rem;
    margin-right: 10px;
    flex-shrink: 0;
    @media ${devices.mobileL} {
      margin: 0;
    }
  }
  & > div {
    & > h1 {
      font-size: 1.8rem;
      margin-bottom: 8px;
      color: rgba(47, 44, 74, 1);
    }
    & > p {
      font-size: 1.4rem;
      color: ${(props) => props.theme.burnBlack};
    }
  }
`;

export const ApplicationWrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.lightBlue};
  display: flex;
  overflow: hidden;
  padding: 50px;
  @media ${devices.desktop} {
    padding: 60px 150px;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
    padding: 0 20px;
    padding-top: 50px;
  }
  & > main {
    width: 40rem;

    @media ${devices.tablet} {
      width: 35rem;
    }
    @media ${devices.mobileL} {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 10px;
    }
    .button_wrapper {
      display: flex;
      column-gap: 20px;
      width: 40rem;
      @media ${devices.mobileL} {
        width: 100%;
        justify-content: center;
      }
      & > div {
        display: flex;
        align-items: center;
        background-color: #0a2351;
        border-radius: 5px;
        padding: 5px 10px;
        width: max-content;
        color: white;
        &:first-child {
          background-color: white;
          color: black;
          border: 1px solid ${(props) => props.theme.lightBlack};
        }
        & > figure {
          position: relative;
          width: 4rem;
          margin-right: 8px;
        }
        & > div {
          p {
            font-size: 11px;
          }
          strong {
            font-weight: 600;
            font-size: 13px;
            letter-spacing: 0.6px;
          }
        }
      }
    }
  }
  & > figure {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 50rem;
    @media ${devices.desktop} {
      max-width: 60rem;
    }
    @media ${devices.tablet} {
      max-width: 45rem;
      right: -40px;
    }
    @media ${devices.mobileL} {
      position: relative;
      left: 0;
    }
  }
`;

export const NewsSection = styled.section`
  position: relative;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  overflow: hidden;

  @media ${devices.mobileL} {
    padding: 50px 20px;
  }
  & > div {
    text-align: center;
    align-self: center;
    margin-bottom: 40px;
  }
  & > main {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 40px;
    place-content: center;
    place-items: center;
    margin: 0 auto;
    @media ${devices.laptop} {
      grid-template-columns: repeat(3, 1fr);
      place-content: center;
      gap: 30px;
    }
    @media ${devices.mobileL} {
      place-items: center;
      grid-template-columns: repeat(1, 1fr);
      gap: 30px 0;
    }
    & > figure {
      position: relative;
      max-width: 30rem;
      & > div {
        display: flex;
        margin-top: 10px;
        padding: 0 20px;
        & > figure {
          position: relative;
          width: 8rem;
        }
        & > div {
          & > p {
            font-weight: 600;
            font-size: 15px;
            line-height: 20px;
            padding-bottom: 8px;
            color: ${(props) => props.theme.dirtyBlack};
          }
          & > span {
            cursor: pointer;
            font-size: 12px;
            color: ${(props) => props.theme.burnBlack};
            transition: color 0.07s linear;
            &:hover {
              color: ${(props) => props.theme.waterBlue};
            }
            & > svg {
              font-size: 20px;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
`;

export const FooterSection = styled.footer`
  position: relative;
  width: 100%;
  background-color: #2b2b39;
  display: grid;
  grid-template-columns: repeat(4, 0.5fr) 1fr;
  place-content: center;
  padding: 80px;
  @media ${devices.laptop} {
    padding: 50px;
  }
  @media ${devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
  }
  @media ${devices.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px;
    gap: 0px;
  }
  & > div {
    position: relative;
    width: 32rem;
    color: white;
    @media ${devices.mobileL} {
      padding: 20px 0;
      width: 100%;
    }
    & > h1 {
      font-size: 22px;
      letter-spacing: 0.5px;
      font-weight: 500;
      line-height: 27px;
      padding-bottom: 18px;
    }
    & > p {
      font-size: 13px;
      color: rgba(231, 231, 231, 1);
      padding-bottom: 24px;
    }
    & > form {
      position: relative;
      border: 1px solid white;
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      align-items: center;
      height: 4.5rem;
      width: 100%;
      & > input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        padding-left: 10px;
        &:is(:focus) {
          outline: none;
        }
      }
      & > button {
        border: white;
        color: ${(props) => props.theme.dirtyBlack};
        height: 100%;
        padding: 8px 20px;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`;

export const Column = styled.ul`
  display: flex;
  flex-direction: column;
  @media ${devices.mobileL} {
    padding: 25px 0;
    border-bottom: 1px solid white;
  }
  & > .header {
    letter-spacing: 0.5px;
    font-weight: 500;
    color: white;
    margin-bottom: 20px;
    font-size: 16px;
  }
  & > li {
    text-decoration: none;
    list-style: none;
    color: rgba(231, 231, 231, 1);
    font-size: 13px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const Copyright = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 80px;
  background-color: #20202d;
  @media ${devices.mobileL} {
    align-items: center;
    padding: 20px;
  }
  & > .logo_wrapper {
    display: flex;
    align-items: center;
    width: max-content;
    color: white;
    & > figure {
      position: relative;
      width: 5rem;
      height: 5rem;
    }
    & > span {
      font-size: 2rem;
      font-weight: bold;
      margin-left: 5px;
      display: inline-block;
      letter-spacing: 0.5px;
    }
  }
  & > p {
    font-size: 16px;
    color: white;
    letter-spacing: 0.5px;
    @media ${devices.mobileL} {
      display: none;
    }
  }
  & > div > svg {
    font-size: 25px;
    width: 3.5rem;
    height: 3.5rem;
    background-color: white;
    padding: 5px;
    border-radius: 100%;
    cursor: pointer;
    @media ${devices.mobileL} {
      width: 3rem;
      height: 3rem;
      padding: 3px;
    }
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;
