import { Route, Routes } from "react-router-dom";
import "./App.css";
import { publicRoute } from "./route/publicRoutes";
import Navbar from "./Pages/Shared/Navbar";
import PrivateRoute from "./authendication/PrivateRoute";
import { privateRoutes } from "./route/privateRoutes";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          <Route element={<PrivateRoute />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
