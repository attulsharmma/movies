import { Container } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Movies />
      </Container>
    </div>
  );
};

export default App;
