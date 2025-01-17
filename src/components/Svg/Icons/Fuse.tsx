import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 88 88" {...props}>
      <g>
        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="14.4231" y1="10.0635" x2="80.2662" y2="86.8805">
          <stop  offset="0" stopColor="#0E2E4A"/>
          <stop  offset="1" stopColor="#0D1116"/>
        </linearGradient>
        <circle fill="url(#SVGID_1_)" cx="43.78" cy="44.31" r="43"/>
        <g>
          <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="43.0192" y1="18.6582" x2="44.0168" y2="68.5393">
            <stop  offset="0" stopColor="#9FFCB4"/>
            <stop  offset="1" stopColor="#F5FB7B"/>
          </linearGradient>
          <path fill="url(#SVGID_2_)" d="M43.73,60.9c-1.67,0-3.22-0.35-4.48-1.02l-13.62-7.15l-4.08,2.46c-1.94,1.17-1.91,2.97,0.08,4.01l18.83,9.9
            c0.91,0.48,2.08,0.72,3.27,0.72c1.38,0,2.79-0.32,3.83-0.95L66,57.72c1.94-1.17,1.91-2.97-0.08-4.01l-3.92-2.06l-13.1,7.91
            C47.49,60.43,45.65,60.9,43.73,60.9z"/>
        </g>
        <g>
          <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="43.7751" y1="18.9917" x2="43.7751" y2="69.8705">
            <stop  offset="0" stopColor="#9FFCB4"/>
            <stop  offset="1" stopColor="#F5FB7B"/>
          </linearGradient>
          <path fill="url(#SVGID_3_)" d="M65.92,41.2l-3.26-1.71l-7.59,4.59l-1.3,0.79l-1.3,0.79l-3.55,2.15c-1.42,0.86-3.26,1.33-5.18,1.33
            c-1.67,0-3.22-0.35-4.48-1.02l-4.07-2.14l-1.35-0.71l-1.35-0.71l-7.5-3.94l-3.43,2.07c-1.94,1.17-1.91,2.97,0.08,4.01l3.92,2.06
            l1.35,0.71l1.35,0.71l12.22,6.42c0.91,0.48,2.08,0.72,3.27,0.72c1.38,0,2.79-0.32,3.83-0.95l11.75-7.1l1.3-0.79l1.3-0.79L66,45.2
            C67.94,44.03,67.91,42.24,65.92,41.2z"/>
        </g>
        <g>
          <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="43.961" y1="17.6614" x2="43.2959" y2="69.5378">
            <stop  offset="0" stopColor="#9FFCB4"/>
            <stop  offset="1" stopColor="#F5FB7B"/>
          </linearGradient>
          <path fill="url(#SVGID_4_)" d="M65.92,29.42l-18.83-9.9c-0.91-0.48-2.08-0.72-3.27-0.72c-1.38,0-2.79,0.32-3.83,0.95L21.55,30.89
            c-1.94,1.17-1.91,2.97,0.08,4.01l3.26,1.71l1.35,0.71l1.35,0.71l7.5,3.94l1.35,0.71l1.35,0.71l2.68,1.41
            c0.91,0.48,2.08,0.72,3.27,0.72c1.38,0,2.79-0.32,3.83-0.95l2.21-1.33l1.3-0.79l1.3-0.79l7.59-4.59l1.3-0.79l1.3-0.79L66,33.42
            C67.94,32.25,67.91,30.46,65.92,29.42z"/>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
