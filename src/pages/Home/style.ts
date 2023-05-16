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
  background-color: ${props => props.theme === "dark" ? CONSTANTS.COLORS.zinc900 : CONSTANTS.COLORS.zinc50
  };
`;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80vw;
  gap: 36px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid ${CONSTANTS.COLORS.zinc800};
  width: 50%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h4<ITheme>`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme === "dark" ? CONSTANTS.COLORS.zinc400 : CONSTANTS.COLORS.zinc600};
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${CONSTANTS.COLORS.zinc500};
`;

export const IconWrapper = styled.div``;