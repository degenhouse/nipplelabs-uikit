import { SpaceProps } from "styled-system";
import { BaseButtonProps, Scale, variants } from "../Button/types";

export interface VButtonMenuItemProps extends BaseButtonProps {
  isActive?: boolean;
}

export interface VButtonMenuProps extends SpaceProps {
  variant?: typeof variants.PRIMARY | typeof variants.SUBTLE;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: Scale;
  children: React.ReactElement[];
}
