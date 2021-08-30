import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import MobileButtonMenu from "./MobileButtonMenu";
import MobileButtonMenuItem from "./MobileButtonMenuItem";
import { SwapIcon, LiquidityIcon} from "../Svg";

const Row = styled.div`
  margin-bottom: 32px;

  & > button + button {
    margin-left: 16px;
  }
`;

export default {
  title: "Components/MobileButton Menu",
  component: MobileButtonMenu,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const handleClick = (newIndex) => setIndex(newIndex);
  const handleClick1 = (newIndex) => setIndex1(newIndex);

  return (
    <>
      <Row>
        <MobileButtonMenu activeIndex={index} onItemClick={handleClick} scale="sm">
          <MobileButtonMenuItem as="a" href=""><SwapIcon /></MobileButtonMenuItem>
          <MobileButtonMenuItem as="a" href="" ><LiquidityIcon /></MobileButtonMenuItem>
        </MobileButtonMenu>
      </Row>
    </>
  );
};

export const AsLinks: React.FC = () => {
  return (
    <Row>
      <MobileButtonMenu activeIndex={0}>
        <MobileButtonMenuItem as="a" href="https://pancakeswap.finance">
          Link 1
        </MobileButtonMenuItem>
        <MobileButtonMenuItem as="a" href="https://pancakeswap.finance">
          Link 2
        </MobileButtonMenuItem>
        <MobileButtonMenuItem as="a" href="https://pancakeswap.finance">
          Link 3
        </MobileButtonMenuItem>
      </MobileButtonMenu>
    </Row>
  );
};
