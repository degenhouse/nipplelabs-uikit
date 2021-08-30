import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 43 33" {...props}>
      <rect width="43" height="7" rx="3.5"/>
      <rect y="13" width="43" height="7" rx="3.5"/>
      <rect y="26" width="43" height="7" rx="3.5"/>
    </Svg>
  );
};

export default Icon;
