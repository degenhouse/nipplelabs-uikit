import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 18" {...props}>
      <path d="M17.2332 16.9837H20.4803L10.2401 0L0 16.9837H3.24707L10.2401 5.38433L17.2332 16.9837Z" />
      <path d="M22.2471 1H19L29.2401 17.9837L39.4803 1H36.234L29.2401 12.5986L22.2471 1Z" />
    </Svg>
  );
};

export default Icon;
