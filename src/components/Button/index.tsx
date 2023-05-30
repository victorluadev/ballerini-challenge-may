import { useTranslation } from "react-i18next";
import { TMode } from "../../types/pomodoro";
import { ButtonWrapper } from "./style";

interface IButton {
  mode: TMode;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const Button = ({ mode, onClick }: IButton) => {
  const { t } = useTranslation();

  return (
    <ButtonWrapper mode={mode} onClick={onClick}>
      { mode === "focus" ? t('buttonFocus') :
        mode === "short" ? t('buttonShort') :
        t('buttonLong')
      }
    </ButtonWrapper>
  )
}

export default Button;