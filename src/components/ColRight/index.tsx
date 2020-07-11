import React, { ReactNode } from "react";
import { Col6 } from "./../Grid";

interface Children {
  children?: ReactNode;
}

const ColRight: React.FC<Children> = ({ children }) => {
  return <Col6 className="col-right">{children}</Col6>;
};

export default ColRight;
