import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import VButtonMenu from "./VButtonMenu";
import VButtonMenuItem from "./VButtonMenuItem";
import { SwapIcon, LiquidityIcon} from "../Svg";

const Row = styled.div`
  margin-bottom: 32px;

  & > button + button {
    margin-left: 16px;
  }
`;

export default {
  title: "Components/VButton Menu",
  component: VButtonMenu,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  // const [index, setIndex] = useState(0);
  const [index, setIndex] = useState(1);

  // const handleClick = (newIndex) => setIndex(newIndex);
  const handleClick = (newIndex) => setIndex(newIndex);

  return (
    <>
      <Row>
        <VButtonMenu activeIndex={index} onItemClick={handleClick} scale="sm">
          <VButtonMenuItem as="a" href="" ><SwapIcon /></VButtonMenuItem>
          <VButtonMenuItem as="a" href="" ><LiquidityIcon /></VButtonMenuItem>
        </VButtonMenu>
      </Row>
    </>
  );
};

