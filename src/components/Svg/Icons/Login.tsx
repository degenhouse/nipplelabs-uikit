import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 400 400" {...props}>
      <path d="M27 19c-11 3-17 9-20 20v322c3 11 9 17 20 20h296c11-3 18-9 20-21v-40c-3-18-23-26-39-16-6 5-10 12-10 22v5H56V69h238v5c0 10 4 17 10 22 14 8 31 3 37-10 2-5 3-7 3-27l-1-19c-2-12-9-18-20-21H27m296 13c3 1 6 4 7 7s2 37 1 40c-3 9-14 11-21 5-3-3-3-3-4-14 0-10 0-11-3-13l-1-1H175C38 56 47 56 45 58c-1 2-1-3-1 142s0 140 1 142c2 2-7 2 130 2h127l1-1c3-2 3-3 3-13 1-11 1-11 4-14 7-6 18-4 21 5 1 3 0 37-1 40s-4 6-7 7l-2 1H175l-148-1c-4-1-6-4-8-8V40c2-4 4-7 8-8l148-1h146l2 1m-199 83c-9 2-9 3-29 32l-20 30c-8 11-9 19-4 29l41 62c13 15 39 9 43-11 2-8 0-13-9-27l-6-10h62l1-1c3-3 3-9-1-10l-38-1h-38l-1 1c-5 3-4 5 2 15l16 25c4 11-12 20-20 12-2-1-40-58-41-61-3-6-4-5 19-40 21-30 22-32 25-33 8-3 17 3 17 12 0 4 1 2-14 25l-7 12c0 3 1 5 3 6l2 1h77c84 0 80 0 84 2 7 4 6 18-2 21l-2 1-24 1c-26 0-26 0-28 2-3 2-1 9 3 10s51 0 53-1c23-8 23-39 1-47-5-2-3-2-78-2h-71l6-9c8-13 9-15 9-22 0-17-15-29-31-24m227 50h-3a32 32 0 0 0-24 30c0 30 38 42 56 19 12-15 6-39-11-47-5-2-15-4-18-2m10 12c14 4 18 25 5 34-14 10-33-4-28-21 3-10 12-15 23-13m-145 31c-7 3-4 12 2 12 8-1 8-12 0-12h-2" fill="#343535"/><path d="M27 32c-4 1-6 4-8 8v320c2 4 4 7 8 8l148 1h146l2-1c3-1 6-4 7-7s2-37 1-40c-3-9-14-11-21-5-3 3-3 3-4 14 0 10 0 11-3 13l-1 1H175c-137 0-128 0-130-2-1-2-1 3-1-142s0-140 1-142c2-2-7-2 130-2h127l1 1c3 2 3 3 3 13 1 11 1 11 4 14 7 6 18 4 21-5 1-3 0-37-1-40s-4-6-7-7l-2-1H175L27 32m317 27v9a857 857 0 0 0 0-9m13 168h1l-1-1v1m-13 114v8a857 857 0 0 0 0-8" fill="#fbcb3b"/><path d="M26 19h2-2m296 0h2-2m14 7 2 2 1 1-1-2-1-1h-1M10 30v1-1l1-1-1 1m284 43v3a49 49 0 0 0 0-3m0 8 1 2v-1l-1-1m1 3 1 2v-1l-1-1m44 5-1 2 3-4-2 2m-38 4 1 1-1-1-2-2 2 2m2 2 3 2-2-2h-1m11 5h2l-1-1c-2 0-2 0-1 1m8 0c-1 0-1 0 0 0h2-2m-193 14h3-3m-5 0 1 1 1-1h-2m-6 3c-2 1-2 1 0 0h1-1m28 2 2 2 2 2-2-2-2-2m-33 2-2 2 2-2 1-1-1 1m-3 3-1 2 1-2 1-1-1 1m16 3c-3 1-5 3-25 33-23 35-22 34-19 40 1 3 39 60 41 61 8 8 24-1 20-12l-16-25c-6-10-7-12-2-15l1-1h38l38 1c2 1 3 2 3 5v1l4-1 3 1v-1c0-7 11-8 12-1v2c0-2 6-2 6-1l1 2v1-2c-1-3 0-5 3-7h26l24-1 2-1c8-3 9-17 2-21-4-2 0-2-84-2h-77l-2-1c-2-1-3-3-3-6l7-12c15-23 14-21 14-25 0-9-9-15-17-12m-28 15-8 12a546 546 0 0 0 8-12m57-5v1-3 2m0 5v1-2 1m-4 10v1l1-1v-1l-1 1m-9 15-2 3 2-3 2-4-2 4m210-3h8-8m-5 1v1l1-1c1 0 1 0 0 0h-1m-8 4c-1 0-1 1 0 0l1-1-1 1m34 1 3 2-1-1-2-1m-40 3c-1 2-4 5-2 4a79 79 0 0 0 2-4m-40 1 1 1h2l-2-1h-1m87 2 1 2-2-3 1 1m-84 0 3 2 2 2-2-2-3-2m57 1c-15 2-22 21-11 32 12 11 31 4 32-12 1-13-9-22-21-20M68 191v2l1-2v-2l-1 2m237 4v2-4 2m81 0v6-1l1-5v-4l-1 4m-62 0v1-2 1m-256 3v2c1 1 1 1 1-1l-1-1m236 4v1c0 1 0 1 0 0l1-1h-1m81 1v1l1-1v-1l-1 1m-59 4 1 1v-1c-1-2-1-2-1 0m1 2 2 2-1-1-1-1m55 3-1 1 1-1 1-2-1 2m-83 1-2 2 2-2c2-3 2-3 0 0m32 2 1 1-1-1-1-1 1 1m46 3-2 2 5-5-3 3m-174 0-1 2 2-1 1-2-2 1m9-1 3 3-1-2-2-1m10 2-1 1 1-1c2-2 1-2 0 0m112 0 2 1 1 1-1-1-1-2-1 1m-163 1h-31 31m47 0h-2 4-2m125 4 2 1-1-1h-1m22 1h1l1-1-2 1m-16 1h2-2c-1 0-1 0 0 0m-193 25v1-2 1m0 3v1-2 1m-1 3v1c0 1 0 1 0 0v-1c0-1 0-1 0 0m-43 11 2 2c1 2 1 1-1 0l-1-2m36 1-2 2 3-2 2-2-3 2m-32 3 3 2-1-1-2-1m10 5h2l-1-1-1 1m7 0h1v-1l-1 1m-4 0h2-2m185 23h2-2m7 0 2 1 1-1h-3m-17 4-1 1h1l2-2-2 1m-3 3-2 2 2-2 1-1-1 1m38 4 2 2-3-4 1 2m-44 6-1 2 1-1v-1m-1 10v2a49 49 0 0 0 0-2M10 369l1 2-1-1v-1m3 4 1 1-1-1c-1-2-2-2 0 0m324 0-1 1 2-1c1-2 0-2-1 0m-311 8h2-2m296 0h2-2" fill="#3494e3"/>
    </Svg>
  );
};

export default Icon;