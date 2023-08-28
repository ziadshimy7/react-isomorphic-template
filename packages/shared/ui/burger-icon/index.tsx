import clsx from "clsx";
import { FC } from "react";

import "./index.scss";

interface BurgerIconProps {
  open?: boolean;
}

const BurgerIcon: FC<BurgerIconProps> = ({ open = false }) => (
  <div className={clsx("burger_icon", { open })}>
    <span />
    <span />
    <span />
  </div>
);

export default BurgerIcon;
