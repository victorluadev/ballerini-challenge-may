import styled from "styled-components";

export const PomodoroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 64px;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 32px;
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;

export const ActionTexts = styled.div`
  display: flex;
  max-width: 214px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;
`;

export const ActionTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  color: ${props => props.theme.actionTitle};
`;

export const ActionSubtitle = styled.p`
  text-align: justify;
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme.subtitle};
`;