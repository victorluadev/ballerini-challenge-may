import {
  ActionWrapper,
  Container,
  InfoWrapper,
  Subtitle,
  Title,
} from "./style";

import { ITheme } from "../../types/theme";
import Icon from "../Icon";

import GithubIcon from "../../assets/github.svg";
import LightIcon from "../../assets/light.svg";
import TranslateIcon from "../../assets/translate.svg";

interface IHeader extends ITheme {}

const Header = ({ theme }: IHeader) => {
  return (
    <Container>
      <InfoWrapper>
        <Title theme={theme}>Pomodoro</Title>
        <Subtitle theme={theme}>Gerencie seu tempo de maneira mágica!</Subtitle>
      </InfoWrapper>
      <ActionWrapper>
        <Icon 
          theme={theme} 
          icon={LightIcon} 
          alt="ícone para troca de tema"
          isClickable
        />
        <Icon 
          theme={theme} 
          icon={GithubIcon} 
          alt="link para o github"
          isClickable
        />
        <Icon
          theme={theme}
          icon={TranslateIcon}
          alt="ícone para troca de idioma"
          isClickable
        />
      </ActionWrapper>
    </Container>
  );
};

export default Header;
