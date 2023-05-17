import {
  ActionWrapper,
  Container,
  InfoWrapper,
  Subtitle,
  Title,
} from "./style";

interface IHeader {
  children: string | JSX.Element | JSX.Element[];
}
const Header = ({children}: IHeader) => {
  return (
    <Container>
      <InfoWrapper>
        <Title>Pomodoro</Title>
        <Subtitle>Gerencie seu tempo de maneira mágica!</Subtitle>
      </InfoWrapper>
      <ActionWrapper>
        {children}
      </ActionWrapper>
    </Container>
  );
};

export default Header;
