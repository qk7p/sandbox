import { useState } from "react";
import "./drop-down.css";

export interface IDropDownProps {
  className?: string;
  children?: React.ReactNode;
}

function DropDown(props: IDropDownProps) {
  const { className, children } = props;

  return (
    <div className={className}>
      {children ? (
        <div className="drop-down-content-container">{children}</div>
      ) : null}
    </div>
  );
}

export default DropDown;
