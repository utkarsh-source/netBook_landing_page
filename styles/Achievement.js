import styled from "styled-components";
import { devices } from "./theme";

export const AchievementSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 100px;
  padding: 50px 0;
  overflow: hidden;
  @media ${devices.laptop} {
    flex-direction: column;
    padding: 50px;
    gap: 50px;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
    padding: 50px 20px;
  }
  & > div {
    display: flex;
    align-items: stretch;
    column-gap: 30px;
    @media ${devices.laptop} {
      justify-content: center;
      order: 2;
      gap: 20px;
      margin: 0 auto;
      width: max-content;
    }
    @media ${devices.mobileL} {
      width: 100%;
      flex-direction: column;
      gap: 20px;
    }
  }
  & > main {
    position: relative;
    width: 45rem;
    @media ${devices.laptop} {
      width: 100%;
    }
    @media ${devices.mobileL} {
      text-align: center;
      width: 100%;
      order: 1;
      margin-bottom: 30px;
      button {
        margin: 0 auto;
      }
    }
  }
  @media ${devices.mobileL} {
    flex-direction: column;
    gap: 10px;
  }
`;
