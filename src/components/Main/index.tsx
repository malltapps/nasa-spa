import React, { ReactNode } from "react";
import { Container, Row } from "../Grid";

interface Children {
  children?: ReactNode;
}
const Main: React.FC<Children> = ({ children }) => {
  return (
    <>
      <div className="main blur-opc"> </div>
      <Container className="app">
        <Row>{children}</Row>
      </Container>
    </>
  );
};

export default Main;
