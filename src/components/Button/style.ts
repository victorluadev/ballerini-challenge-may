import styled from "styled-components";
import { TMode } from "../../types/pomodoro";
import { CONSTANTS } from "../../constants";

interface IButton {
  mode: TMode;
}

export const ButtonWrapper = styled.button<IButton>`
  width: 190px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  padding: 12px;
  color: ${CONSTANTS.COLORS.zinc50};
  cursor: pointer;
  
  &:active {
      opacity: 1.1;
    }

  &:hover {
    transform: scale(1.10);
  }
  
  ${props => props.mode === "focus" ? `
    background-color: ${CONSTANTS.COLORS.green}
  ` : props.mode === "short" ? `
    background-color: ${CONSTANTS.COLORS.orange}
  ` : `
    background-color: ${CONSTANTS.COLORS.cyan}
  `}

`;