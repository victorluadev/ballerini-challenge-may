import styled from "styled-components";

export const ClockContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ClockSpan = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 64px;
  color: ${props => props.theme.pomodoroClockTime};
`;