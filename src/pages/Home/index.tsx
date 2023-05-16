import { useState } from "react";
import {
  Container,
  DetailsWrapper,
  IconWrapper,
  InfoWrapper,
  Section,
  SectionWrapper,
  Subtitle,
  Title,
} from "./style";

import Header from "../../components/Header";
import Icon from "../../components/Icon";

import TimeIcon from "../../assets/time.svg";
import RocketIcon from "../../assets/rocket.svg";

type TTheme = "dark" | "white";

const Home = () => {
  const [theme, setTheme] = useState<TTheme>("dark");

  return (
    <Container theme={theme}>
      <Header theme={theme} />
      <SectionWrapper>
        <Section>
          <DetailsWrapper>
            <InfoWrapper>
              <Title theme={theme}>Dados da sessão</Title>
              <Subtitle>Acompanhe os próximos ciclos</Subtitle>
            </InfoWrapper>
            <IconWrapper>
              <Icon theme={theme} icon={TimeIcon} alt="Ícone de ampulheta" />
            </IconWrapper>
          </DetailsWrapper>
        </Section>
        <Section>
          <DetailsWrapper>
            <InfoWrapper>
              <Title theme={theme}>Lista de tarefas</Title>
              <Subtitle>Seus objetivos para essa sessão</Subtitle>
            </InfoWrapper>
            <IconWrapper>
              <Icon theme={theme} icon={RocketIcon} alt="Ícone de foguete" />
            </IconWrapper>
          </DetailsWrapper>
        </Section>
      </SectionWrapper>
    </Container>
  );
};

export default Home;
