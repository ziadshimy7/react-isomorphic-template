import { FC, ReactElement, Children } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./index.scss";

interface TransitionStackProps {
  root: ReactElement;
  children?: ReactElement | ReactElement[];
}

export const TransitionStack: FC<TransitionStackProps> = ({
  children,
  root,
}) => (
  <div className="transition_stack">
    <div className="transition_stack__item enter-done">{root}</div>
    <TransitionGroup>
      {Children.map(children, (child) => (
        <CSSTransition key={child?.key} timeout={300}>
          <div className="transition_stack__item" aria-disabled>
            {child}
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
);
