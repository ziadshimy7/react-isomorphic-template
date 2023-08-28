import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  open?: boolean;
  children: ReactNode;
}

const Portal: FC<PortalProps> = ({ open = false, children }) => {
  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    setContainer(document.body);
  }, []);

  if (!open || !container) {
    return null;
  }

  return createPortal(children, container);
};

export default Portal;
