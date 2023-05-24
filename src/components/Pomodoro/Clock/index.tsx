import { ClockSpan, ClockContainer } from "./style";

interface IClock {
  time: number | undefined;
}

const Clock = ({ time = 0 }: IClock) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteFstPosition, minuteScdPosition] = String(minutes).padStart(2, "0");
  const [secondFstPosition, secondScdPosition] = String(seconds).padStart(2, "0");

  return (
    <ClockContainer>
      <ClockSpan>{minuteFstPosition}</ClockSpan>
      <ClockSpan>{minuteScdPosition}</ClockSpan>
      <ClockSpan>:</ClockSpan>
      <ClockSpan>{secondFstPosition}</ClockSpan>
      <ClockSpan>{secondScdPosition}</ClockSpan>
    </ClockContainer>
  )
}

export default Clock;