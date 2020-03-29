import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Registro from "./pages/Registro";
import Banca from "./pages/Banca";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/registro" component={Registro} />
        <Route path="/banca" component={Banca} />
      </Switch>
    </BrowserRouter>
  );
}
