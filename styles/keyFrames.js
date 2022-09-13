import { keyframes } from "styled-components";

export const pulse = keyframes`
    0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(0);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1);
    }        
`;
