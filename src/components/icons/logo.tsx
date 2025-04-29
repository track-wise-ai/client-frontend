import LogoIcon from "../../../public/logo.png";
import type { FC } from "react";

type Props = {
  width?: number;
  height?: number;
};

const Logo: FC<Props> = ({ width = 32, height = 32 }) => {
  return (
    <img src={LogoIcon} width={width} height={height} alt="TrackWise logo" />
  )
};

export { Logo };
