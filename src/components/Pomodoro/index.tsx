import { useState, useEffect } from 'react';
import {
  BadgeContainer,
  ClockContainer,
  InfoContainer,
  InfoContent,
  InfoLineContainer,
  InfoSubtitle,
  InfoTitle,
  PomodoroWrapper,
} from "./style";

import Badge from "../Badge";
import Clock from "./Clock";
import { CircularProgressbarWithChildren  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ConfigPomodoro } from './config';

const Pomodoro = () => {
  const order = ConfigPomodoro.order;

  const [time, setTime] = useState<number>();
  const [current, setCurrent] = useState<string>("");
  const [previous, setPrevious] = useState<string>("");
  const [percentage, setPercentage] = useState<number>(0);

  return (
    <PomodoroWrapper>
      <InfoContainer>
        <InfoLineContainer>
          <InfoContent>
            <InfoTitle>Modo atual:</InfoTitle>
            <InfoSubtitle>Cíclo atual do cronômetro</InfoSubtitle>
          </InfoContent>
          <BadgeContainer>
            <Badge type="focus" />
          </BadgeContainer>
        </InfoLineContainer>
        <InfoLineContainer>
          <InfoContent>
            <InfoTitle>Próximo modo:</InfoTitle>
            <InfoSubtitle>Qual cíclo será ativado</InfoSubtitle>
          </InfoContent>
          <BadgeContainer>
            <Badge type="long" />
          </BadgeContainer>
        </InfoLineContainer>
      </InfoContainer>
      <ClockContainer>
        <CircularProgressbarWithChildren value={percentage}>
          <Clock time={time}/>
        </CircularProgressbarWithChildren>
      </ClockContainer>
    </PomodoroWrapper>
  );
};

export default Pomodoro;
