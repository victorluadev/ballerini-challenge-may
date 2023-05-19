import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  overflow: hidden;
  background-color: ${props => props.theme.body};
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
  border: 1px solid ${props => props.theme.border};
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

export const Title = styled.h4`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.title};
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.subtitle};
`;

export const IconWrapper = styled.div``;

export const Divisor = styled.hr`
  margin: 0 24px 24px 24px;
  border: 1px solid ${props => props.theme.border};
`;