import styled from "styled-components";
import { CONSTANTS } from "../../constants";

interface IBadge {
  type: string;
}

export const BadgeWrapper = styled.div<IBadge>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  
  ${props => props.type === "focus" ? `
    background-color: ${CONSTANTS.COLORS.greenTransparent};
    border: 1px solid ${CONSTANTS.COLORS.green};
    color: ${CONSTANTS.COLORS.green};
  `: props.type === "short" ? `
    background-color: ${CONSTANTS.COLORS.orangeTransparent};
    border: 1px solid ${CONSTANTS.COLORS.orange};
    color: ${CONSTANTS.COLORS.orange};
  `: `
    background-color: ${CONSTANTS.COLORS.cyanTransparent};
    border: 1px solid ${CONSTANTS.COLORS.cyan};
    color: ${CONSTANTS.COLORS.cyan};
  `}
`; 

export const BadgeIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const BadgeText = styled.p`
  font-size: 14px;
  font-weight: 600;
`;