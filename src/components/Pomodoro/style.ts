import styled from "styled-components";

export const PomodoroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InfoLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  color: ${props => props.theme.pomodoroTitle};
`;

export const InfoSubtitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.theme.pomodoroSubtitle};
`;

export const ClockContainer = styled.div`
  height: 272px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin-top: 64px;
`;

export const ClockNumber = styled.p`
  font-family: "Rajdhani", sans-serif;
  font-weight: 700;
  font-size: 64px;
  color: ${props => props.theme.pomodoroClockTime};
`;
