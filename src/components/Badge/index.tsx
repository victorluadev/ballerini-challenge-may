import { BadgeIcon, BadgeText, BadgeWrapper } from "./style";

import focusBadge from '../../assets/focus.svg';
import longBadge from '../../assets/cyanTea.svg';
import shortBadge from '../../assets/orangeTea.svg';

type TBadge = "focus" | "long" | "short";

interface IBadge {
  type: TBadge;
}

const Badge = ({ type }: IBadge) => {
  return (
    <BadgeWrapper type={type}>
      {type === "focus" ? (
        <>
          <BadgeIcon src={focusBadge} alt="ícone de foco"/>
          <BadgeText>Foco</BadgeText>
        </>
      ):
      type === "short" ? (
        <>
          <BadgeIcon src={shortBadge} alt="ícone de pausa curta"/>
          <BadgeText>Pausa Curta</BadgeText>
        </>
      ) : (
        <>
          <BadgeIcon src={longBadge} alt="ícone de pausa longa"/>
          <BadgeText>Pausa Longa</BadgeText>
        </>
      )}
    </BadgeWrapper>
  )
}

export default Badge;