import { IconBody, IconImg } from "./style";

interface IIcon {
  icon: string;
  alt: string;
  isClickable?: boolean;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const Icon = ({ icon, alt, isClickable = false, onClick }: IIcon) => {
  return (
    <IconBody isClickable={isClickable} onClick={onClick}>
      <IconImg src={icon} alt={alt} />
    </IconBody>
  )
}

export default Icon;