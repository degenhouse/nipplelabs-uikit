import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { MobileButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme, variant }) => (variant === variants.PRIMARY ? theme.colors.white : theme.colors.textSubtle)};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
  border-radius: 0px;
  padding: 0px 6px;
`;

const MobileButtonMenuItem: PolymorphicComponent<MobileButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: MobileButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant="primary" {...props} />;
  }

  return <Button style={{padding: "0px 6px"}} as={as} variant={variant} {...props} />;
};

export default MobileButtonMenuItem;
