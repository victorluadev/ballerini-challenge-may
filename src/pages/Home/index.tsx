import { useState } from "react";
import {
  Container,
  DetailsWrapper,
  Divisor,
  IconWrapper,
  InfoWrapper,
  Section,
  SectionWrapper,
  Subtitle,
  Title,
} from "./style";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../theme";

import Header from "../../components/Header";
import Icon from "../../components/Icon";

import TimeIcon from "../../assets/time.svg";
import RocketIcon from "../../assets/rocket.svg";
import GithubIcon from "../../assets/github.svg";
import LightIcon from "../../assets/light.svg";
import TranslateIcon from "../../assets/translate.svg";
import Tasklist from "../../components/Tasklist";
import Pomodoro from "../../components/Pomodoro";

const Home = () => {
  const [theme, setTheme] = useState<string>("dark");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Header>
        <Icon 
          icon={LightIcon} 
          alt="ícone para troca de tema"
          onClick={toggleTheme}
          isClickable
        />
        <Icon 
          icon={GithubIcon} 
          alt="link para o github"
          isClickable
        />
        <Icon
          icon={TranslateIcon}
          alt="ícone para troca de idioma"
          isClickable
        />
        </Header>
        <SectionWrapper>
          <Section>
            <DetailsWrapper>
              <InfoWrapper>
                <Title>Dados da sessão</Title>
                <Subtitle>Acompanhe os próximos ciclos</Subtitle>
              </InfoWrapper>
              <IconWrapper>
                <Icon icon={TimeIcon} alt="Ícone de ampulheta" />
              </IconWrapper>
            </DetailsWrapper>
            <Divisor/>
            <Pomodoro theme={theme}/>
          </Section>
          <Section>
            <DetailsWrapper>
              <InfoWrapper>
                <Title>Lista de tarefas</Title>
                <Subtitle>Seus objetivos para essa sessão</Subtitle>
              </InfoWrapper>
              <IconWrapper>
                <Icon icon={RocketIcon} alt="Ícone de foguete" />
              </IconWrapper>
            </DetailsWrapper>
            <Divisor/>
            <Tasklist/>
          </Section>
        </SectionWrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
