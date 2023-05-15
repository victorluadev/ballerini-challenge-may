import styled from "styled-components";
import { CONSTANTS } from "../../constants";
import { ITheme } from "../../types/theme";



export const Container = styled.div<ITheme>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  overflow: hidden;
  background-color: ${
    props => props.theme === "dark" ? CONSTANTS.COLORS.zinc900 : CONSTANTS.COLORS.zinc50
  };
`;