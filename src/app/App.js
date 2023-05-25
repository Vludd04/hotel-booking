import React from "react";
import NavBar from "./components/ui/navBar";
import { useRoutes } from "react-router-dom";
import routes from "../routes";
import AppLoader from "./components/ui/hoc/appLoader";

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
