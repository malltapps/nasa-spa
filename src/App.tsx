import React from "react";
import Main from "./components/Main";
import ColLeft from "./components/ColLeft";
import ColRight from "./components/ColRight";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";

import "semantic-ui-css/semantic.min.css";
import "./css/grid.css";
import "./css/app.css";

const App: React.FC = () => {
  return (
    <>
      <Main>
        <ColLeft>
          <Header />
          <Search />
        </ColLeft>

        <ColRight>
          <Results />
        </ColRight>
      </Main>
    </>
  );
};

export default App;
