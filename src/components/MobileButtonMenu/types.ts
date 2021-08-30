import { SpaceProps } from "styled-system";
import { BaseButtonProps, Scale, variants } from "../Button/types";

export interface MobileButtonMenuItemProps extends BaseButtonProps {
  isActive?: boolean;
}

export interface MobileButtonMenuProps extends SpaceProps {
  variant?: typeof variants.PRIMARY | typeof variants.SUBTLE;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: Scale;
  children: React.ReactElement[];
}
