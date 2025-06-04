import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({title, styles, onClick}) => {
  return <button className={styles} onClick={onClick}>{title}</button>;
};

export default Button;
