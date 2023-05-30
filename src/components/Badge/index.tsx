import { BadgeIcon, BadgeText, BadgeWrapper } from "./style";

import focusBadge from '../../assets/focus.svg';
import longBadge from '../../assets/cyanTea.svg';
import shortBadge from '../../assets/orangeTea.svg';
import { TMode } from "../../types/pomodoro";

import { useTranslation } from "react-i18next";

interface IBadge {
  type: TMode;
}

const Badge = ({ type }: IBadge) => {

  const { t } = useTranslation();

  return (
    <BadgeWrapper type={type}>
      {type === "focus" ? (
        <>
          <BadgeIcon src={focusBadge} alt="ícone de foco"/>
          <BadgeText>{t('focus')}</BadgeText>
        </>
      ):
      type === "short" ? (
        <>
          <BadgeIcon src={shortBadge} alt="ícone de pausa curta"/>
          <BadgeText>{t('short')}</BadgeText>
        </>
      ) : (
        <>
          <BadgeIcon src={longBadge} alt="ícone de pausa longa"/>
          <BadgeText>{t('long')}</BadgeText>
        </>
      )}
    </BadgeWrapper>
  )
}

export default Badge;