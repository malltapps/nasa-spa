import React, { ReactNode } from "react";
import { Col6 } from "./../Grid";

interface Children {
  children?: ReactNode;
}

const ColLeft: React.FC<Children> = ({ children }) => {
  return <Col6 className="col-left">{children}</Col6>;
};

export default ColLeft;
