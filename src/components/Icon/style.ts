import styled from "styled-components";
import { ITheme } from "../../types/theme";
import { CONSTANTS } from "../../constants";

interface IIcon extends ITheme {
  isClickable: boolean;
}

export const IconBody = styled.div<IIcon>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${props => props.theme === "dark" ? CONSTANTS.COLORS.zinc800 : CONSTANTS.COLORS.zinc400};
  cursor: ${props => props.isClickable ? 'pointer': 'default'};

  ${props => props.isClickable && 
    `:hover{
      transform: scale(1.15);
      transition: transform 5ms linear;
    };`
  }

`;

export const IconImg = styled.img`
  padding: 8px;
`;