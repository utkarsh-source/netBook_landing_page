import styled, { css } from "styled-components";
import { pulse } from "./keyFrames";
import { devices } from "./theme";

export const Netbooks = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  column-gap: 150px;
  overflow: hidden;
  @media ${devices.tablet} {
    gap: 50px;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
    gap: 10px;
    padding: 50px 20px;
  }
  & > main {
    position: relative;
    width: 40rem;
    @media ${devices.laptop} {
      width: 100%;
    }
    @media ${devices.mobileL} {
      width: 100%;
    }
    & > ul {
      & > li {
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        &:not(:last-child) {
          margin-bottom: 1.2rem;
        }
        & span {
          position: relative;
          margin-right: 1rem;
          display: grid;
          place-content: center;
          &::after {
            content: "";
            z-index: -1;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 3rem;
            height: 3rem;
            background-color: ${(props) => props.theme.waterBlue};
            animation: ${pulse} 1.5s infinite;
            border-radius: 100%;
          }
          &::before {
            content: "";
            z-index: -1;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 2.5rem;
            height: 2.5rem;
            background-color: ${(props) => props.theme.waterBlue};
            animation: 1.5s ${pulse} infinite 0.1s;
            border-radius: 100%;
          }
          & > svg {
            position: relative;
            font-size: 2rem;
            color: ${(props) => props.theme.waterBlue};
            width: 2rem;
            height: 2rem;
            border-radius: 100%;
          }
        }
      }
    }
  }
  & > figure {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 3rem;
    & > div {
      display: flex;
      flex-direction: column;
      row-gap: 3rem;
      & > figure {
        position: relative;
      }
    }
  }
`;
