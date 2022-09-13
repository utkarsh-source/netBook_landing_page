import styled, { css } from "styled-components";
import { devices } from "./theme";

export const BannerSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(311.76deg, #d4e7fe -15.24%, #ffffff 78.85%);
  overflow: hidden;

  @media ${devices.laptop} {
    min-height: max-content;
    height: max-content;
  }
  & > div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    @media ${devices.mobileL} {
      flex-direction: column;
      padding: 30px 0;
    }
    & > figure {
      position: relative;
      width: 59rem;
      overflow: hidden;
      @media ${devices.mobileL} {
        margin-top: 20px;
        width: 40rem;
        left: -20px;
      }
    }
    & > main {
      display: flex;
      flex-direction: column;
      max-width: 50rem;
      @media ${devices.laptop} {
        max-width: 40rem;
      }
      @media ${devices.tablet} {
        max-width: 35rem;
      }
      @media ${devices.mobileL} {
        align-items: center;
        text-align: center;
      }
      & > span {
        width: max-content;
        color: ${(props) => props.theme.waterBlue};
        background-color: ${(props) => props.theme.lightBlue};
        padding: 8px 24px;
        margin-bottom: 10px;
        border-radius: 4px;
      }
      & > h1 {
        font-weight: 600;
        font-size: clamp(3.5rem, 5.5vw, 4rem);
        line-height: clamp(3.5rem, 6.3vw, 5rem);
        margin: 30px 0;
      }
      & > p {
        font-size: 1.8rem;
        margin-bottom: 30px;
        color: ${(props) => props.theme.dirtyBlack};
      }
    }
  }
`;
