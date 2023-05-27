import { useState, useEffect } from "react";
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
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ConfigPomodoro } from "./config";
import Button from "../Button";
import { TMode } from "../../types/pomodoro";
import { TimeToSeconds } from "../../utils/TimeToSeconds";

const Pomodoro = () => {
  // ConfigPomodoro.order;

  const [pastTime, setPastTime] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [next, setNext] = useState<TMode>("short");
  const [current, setCurrent] = useState<TMode>("focus");
  const [previous, setPrevious] = useState<TMode>("");
  const [percentage, setPercentage] = useState<number>(0);
  const [row, setRow] = useState<number>(0);

  // useEffect(() => {
  //   const totalTime = TimeToSeconds(getTime());
    
  //   totalTime * 0.25 === time ? setPercentage(25) :
  //   totalTime * 0.50 === time ? setPercentage(50) :
  //   totalTime * 0.75 === time ? setPercentage(75) :
  //   totalTime === time && setPercentage(100);

  // }, [time]);

  const startCicle = () => {
    const timeInSeconds = TimeToSeconds(getTime());

    setTime(timeInSeconds);
    console.log(timeInSeconds);
    console.log('a ' + time);

    regressive(timeInSeconds);
  }

  const regressive = (count: number = 0) => {
    setTimeout(() => {
      if (count > 0) {
        console.log(count - 1);
        setTime(count - 1);
        setPastTime(count);

        return regressive(count - 1);
      }

      // endCicle();
    }, 1000);
  }

  const getTime = () => {
    return current === "focus"
      ? ConfigPomodoro.times.focus
      : current === "short"
      ? ConfigPomodoro.times.short
      : ConfigPomodoro.times.long;
  };

  const endCicle = () => {

  };

  return (
    <PomodoroWrapper>
      <InfoContainer>
        <InfoLineContainer>
          <InfoContent>
            <InfoTitle>Modo atual:</InfoTitle>
            <InfoSubtitle>Cíclo atual do cronômetro</InfoSubtitle>
          </InfoContent>
          <BadgeContainer>
            {current !== "" && <Badge type={current} />}
          </BadgeContainer>
        </InfoLineContainer>
        <InfoLineContainer>
          <InfoContent>
            <InfoTitle>Próximo modo:</InfoTitle>
            <InfoSubtitle>Qual cíclo será ativado</InfoSubtitle>
          </InfoContent>
          <BadgeContainer>
          {next !== "" && <Badge type={next} />}
          </BadgeContainer>
        </InfoLineContainer>
      </InfoContainer>
      <ClockContainer>
        <CircularProgressbarWithChildren value={percentage}>
          <Clock time={time} />
        </CircularProgressbarWithChildren>
        <ActionWrapper style={{display: `${time > 0 ? 'none' : 'flex'}`}}>
          <ActionTexts>
            <ActionTitle>Parabéns! 🎉</ActionTitle>
            <ActionSubtitle>
              Você chegou no fim de mais um cíclo dessa sessão!
            </ActionSubtitle>
          </ActionTexts>
          <Button mode={current} onClick={() => startCicle()} />
        </ActionWrapper>
      </ClockContainer>
    </PomodoroWrapper>
  );
};

export default Pomodoro;
