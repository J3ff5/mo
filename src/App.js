import React from "react";
import Routes from './Routes'
import Drawer from "./components/Drawer";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <GlobalStyle>
      <Drawer />
      <Routes />
    </GlobalStyle>
  );
}