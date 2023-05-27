import { TMode } from "../../types/pomodoro";
import { ButtonWrapper } from "./style";

interface IButton {
  mode: TMode;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const Button = ({ mode, onClick }: IButton) => {
  return (
    <ButtonWrapper mode={mode} onClick={onClick}>
      { mode === "focus" ? "Iniciar: Foco" :
        mode === "short" ? "Iniciar: Pausa Curta" :
        "Iniciar: Pausa Longa"
      }
    </ButtonWrapper>
  )
}

export default Button;