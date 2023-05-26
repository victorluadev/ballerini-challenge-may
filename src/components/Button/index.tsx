import { TMode } from "../../types/pomodoro";
import { ButtonWrapper } from "./style";

interface IButton {
  mode: TMode;
}

const Button = ({ mode }: IButton) => {
  return (
    <ButtonWrapper mode={mode}>
      { mode === "focus" ? "Iniciar: Foco" :
        mode === "short" ? "Iniciar: Pausa Curta" :
        "Iniciar: Pausa Longa"
      }
    </ButtonWrapper>
  )
}

export default Button;