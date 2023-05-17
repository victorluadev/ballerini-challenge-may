import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 54px 0;
  width: 80vw;
`;

export const InfoWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${props => props.theme.headerTitle};
`;

export const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.headerSubtitle};
`;

export const ActionWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;