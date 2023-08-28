import { Popper } from "@mui/base";
import clsx from "clsx";
import {
  FC,
  Ref,
  useRef,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";

import { PopperArrow } from "./arrow";
import styles from "./index.module.scss";
import { DialogLayout } from "./layout/dialog";
import { PopoverLayout } from "./layout/popover";

interface AnchorComponentProps {
  ref: Ref<HTMLButtonElement>;
  open: boolean;
  onClick: () => void;
}

interface PopoverProps {
  open?: boolean;
  className?: string;
  layout?: "popover" | "dialog";
  preventOverflowPadding?: number;
  renderAnchorComponent: (props: AnchorComponentProps) => ReactNode;
  children?: ReactNode;
}

export const Popover: FC<PopoverProps> = ({
  open = false,
  className,
  preventOverflowPadding = 10,
  renderAnchorComponent,
  layout = "popover",
  children,
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [innerOpen, setInnerOpen] = useState(false);

  useEffect(() => {
    setInnerOpen(open);
  }, [open]);

  const onClick = useCallback(() => {
    setInnerOpen((previousOpen) => !previousOpen);
  }, []);

  const handleClose = useCallback(() => {
    setInnerOpen(false);
  }, []);

  return (
    <>
      {renderAnchorComponent({ ref, open: innerOpen, onClick })}
      <Popper
        open={innerOpen}
        className={clsx(styles.popper, className)}
        anchorEl={ref.current}
        placement="bottom-start"
        popperOptions={{ strategy: "fixed" }}
        modifiers={[
          {
            name: "preventOverflow",
            options: {
              padding: preventOverflowPadding,
            },
          },
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
        ]}
      >
        <PopperArrow />
        {layout === "dialog" ? (
          <DialogLayout onClose={handleClose}>{children}</DialogLayout>
        ) : (
          <PopoverLayout onClose={handleClose}>{children}</PopoverLayout>
        )}
      </Popper>
    </>
  );
};
