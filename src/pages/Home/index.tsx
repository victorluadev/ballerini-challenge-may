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
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState<string>("dark");
  const [language, setLanguage] = useState<string>("en-US");
  const isDarkTheme = theme === "dark";
  const isEnglish = language === "en-US";
  
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  const onClickChangeLanguage = () => {
    setLanguage(isEnglish ? "ptBR" : "en-US");
    console.log(language)
    i18n.changeLanguage(language);

  };

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
        <a href="https:/github.com/victorluadev" target="_blank" rel="noreferrer">
          <Icon 
            icon={GithubIcon} 
            alt="link para o github"
            isClickable
          />
        </a>
        <Icon
          icon={TranslateIcon}
          alt="ícone para troca de idioma"
          onClick={onClickChangeLanguage}
          isClickable
        />
        </Header>
        <SectionWrapper>
          <Section>
            <DetailsWrapper>
              <InfoWrapper>
                <Title>{t('sessionTitle')}</Title>
                <Subtitle>{t('sessionSubtitle')}</Subtitle>
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
                <Title>{t('tasklistTitle')}</Title>
                <Subtitle>{t('tasklistSubtitle')}</Subtitle>
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
