import LogoIcon from "../../../public/logo.png";
import FullLogoIcon from "../../../public/full-logo.svg";
import type { FC } from "react";

type Props = {
  width?: number;
  height?: number;
};

const Logo: FC<Props> = ({ width = 32, height = 32 }) => {
  return (
    <img src={LogoIcon} width={width} height={height} alt="TrackWise" />
  )
};

const FullLogo: FC<{ size?: "xs"|"sm"|"md"|"lg"|"xl" }> = ({ size = "xs" }) => {
  const className = (size === "xs") ? "w-32"
    : size === "sm" ? "w-40"
    : size === "md" ? "w-3xs"
    : size === "lg" ? "w-sm"
    : size === "xl" ? "w-lg"
    : "w-40"
  return (<img src={FullLogoIcon} alt="TrackWise" className={className}/>
  );
};

export { Logo, FullLogo };
