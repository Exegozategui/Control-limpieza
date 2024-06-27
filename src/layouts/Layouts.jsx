import React from "react";
import Header from "../componentes/header/index";

import { Outlet } from "react-router-dom";

function Layouts() {
  return (
    <>
      <Header />
      <Outlet />

      
    </>
  );
}

export default Layouts;