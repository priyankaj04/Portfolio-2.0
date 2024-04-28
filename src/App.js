import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { purpleTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={purpleTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={purpleTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
