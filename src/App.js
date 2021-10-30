import React from "react";
import Routes from './Routes'
import { GlobalStyle } from "./styles/global";
import AppBarComponent from "./components/AppBarComponent";

export default function App() {
  return (
    <GlobalStyle>
      <AppBarComponent />
      <Routes />
    </GlobalStyle>
  );
}