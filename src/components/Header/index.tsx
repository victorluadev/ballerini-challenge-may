import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <Container>
      <InfoWrapper>
        <Title>{t('headerTitle')}</Title>
        <Subtitle>{t('headerSubtitle')}</Subtitle>
      </InfoWrapper>
      <ActionWrapper>
        {children}
      </ActionWrapper>
    </Container>
  );
};

export default Header;
