import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Arribointer from "./page/Arribointer";
import Arriboscabo from "./page/Arribocabo";
import "./App.css";
import Embarqueinter from "./page/Embarqueinter";
import Embarquecabo from "./page/Embarquecabo";
import Hallcabo from "./page/Hallcabo";
import Hallinter from "./page/Hallinter ";
import Hallpa from "./page/Hallpa";
import Home from "./page/Home";

import Overside from "./page/Overside";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/arribointer", element: <Arribointer /> },
      { path: "/arribocabo", element: <Arriboscabo /> },
      { path: "/embarqueinter", element: <Embarqueinter /> },
      { path: "/embarquecabo", element: <Embarquecabo /> },
      { path: "/hallcabo", element: <Hallcabo /> },
      { path: "/hallinter", element: <Hallinter /> },
      { path: "/hallpa", element: <Hallpa /> },
      { path: "/overside", element: <Overside /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;