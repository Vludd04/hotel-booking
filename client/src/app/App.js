import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "../routes";
import AppLoader from "./components/ui/hoc/appLoader";
import NavBar from "./components/ui/navBar";

function App() {
  const elements = useRoutes(routes());
  return (
    <div>
      <AppLoader>
        <NavBar />
        {elements}
      </AppLoader>
    </div>
  );
}

export default App;
