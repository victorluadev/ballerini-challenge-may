import { useState, useEffect } from 'react';
import {
  ActionSubtitle,
  ActionTexts,
  ActionTitle,
  ActionWrapper,
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
import Button from '../Button';
import { TMode } from '../../types/pomodoro';

const Pomodoro = () => {
  const order = ConfigPomodoro.order;

  const [time, setTime] = useState<number>();
  const [next, setNext] = useState<TMode>("short");
  const [current, setCurrent] = useState<TMode>("focus");
  const [previous, setPrevious] = useState<TMode>("");
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
            <Badge type={current} />
          </BadgeContainer>
        </InfoLineContainer>
        <InfoLineContainer>
          <InfoContent>
            <InfoTitle>Próximo modo:</InfoTitle>
            <InfoSubtitle>Qual cíclo será ativado</InfoSubtitle>
          </InfoContent>
          <BadgeContainer>
            <Badge type={next} />
          </BadgeContainer>
        </InfoLineContainer>
      </InfoContainer>
      <ClockContainer>
        <CircularProgressbarWithChildren value={percentage}>
          <Clock time={time}/>
        </CircularProgressbarWithChildren>
        <ActionWrapper>
          <ActionTexts>
            <ActionTitle>Parabéns! 🎉</ActionTitle>
            <ActionSubtitle>Você chegou no fim de mais um cíclo dessa sessão!</ActionSubtitle>
          </ActionTexts>
          <Button mode={current}/>
        </ActionWrapper>
      </ClockContainer>
    </PomodoroWrapper>
  );
};

export default Pomodoro;
