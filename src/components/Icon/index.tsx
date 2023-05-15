import { ITheme } from "../../types/theme";
import { IconBody, IconImg } from "./style";

interface IIcon extends ITheme {
  icon: string;
  alt: string;
  isClickable?: boolean;
}

const Icon = ({ theme, icon, alt, isClickable = false }: IIcon) => {
  return (
    <IconBody theme={theme} isClickable={isClickable}>
      <IconImg src={icon} alt={alt} />
    </IconBody>
  )
}

export default Icon;