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
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ConfigPomodoro } from "./config";
import Button from "../Button";
import { TMode } from "../../types/pomodoro";
import { TimeToSeconds } from "../../utils/TimeToSeconds";
import { CONSTANTS } from "../../constants";

interface IPomodoro {
  theme: string
}

const Pomodoro = ({ theme }: IPomodoro) => {
  const [time, setTime] = useState<number>(0);
  const [next, setNext] = useState<TMode>("short");
  const [current, setCurrent] = useState<TMode>("focus");
  const [percentage, setPercentage] = useState<number>(0);
  const [row, setRow] = useState<number>(1);

  useEffect(() => {
    const totalTime = TimeToSeconds(getTime());
    setPercentage(totalTime - time);
  }, [time]);

  const startCicle = () => {
    const timeInSeconds = TimeToSeconds(getTime());

    setTime(timeInSeconds);
    regressive(timeInSeconds);
  };

  const regressive = (count: number = 0) => {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);

        return regressive(count - 1);
      }

      endCicle();
    }, 1000);
  };

  const getTime = () => {
    return current === "focus"
      ? ConfigPomodoro.times.focus
      : current === "short"
      ? ConfigPomodoro.times.short
      : ConfigPomodoro.times.long;
  };

  const endCicle = () => {
    setRow(row + 1);

    if (row <= 7) {
      setCurrent(ConfigPomodoro.order[row] as TMode);
      setNext(ConfigPomodoro.order[row + 1] as TMode);
      
    } else {
      setCurrent("focus");
      setNext("short");

      setRow(1);
    }
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
            {next !== "" && next !== undefined && <Badge type={next} />}
          </BadgeContainer>
        </InfoLineContainer>
      </InfoContainer>
      <ClockContainer>
        <CircularProgressbarWithChildren
          value={percentage}
          maxValue={TimeToSeconds(getTime())}
          strokeWidth={6.5}
          styles={buildStyles({
            pathColor: `${
              current === "focus"
                ? CONSTANTS.COLORS.green
                : current === "short"
                ? CONSTANTS.COLORS.orange
                : CONSTANTS.COLORS.cyan
            }`,
            trailColor: `${theme === "dark" ? CONSTANTS.COLORS.zinc800 : CONSTANTS.COLORS.zinc100}`
          })}
        >
          <Clock time={time} />
        </CircularProgressbarWithChildren>
        <ActionWrapper style={{ display: `${time > 0 ? "none" : "flex"}` }}>
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
