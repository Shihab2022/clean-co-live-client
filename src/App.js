import { Route, Routes } from "react-router-dom";
import "./App.css";
import { publicRoute } from "./route/publicRoutes";
import Navbar from "./Pages/Shared/Navbar";
import PrivateRoute from "./authendication/PrivateRoute";
import { privateRoutes } from "./route/privateRoutes";
import AdminRoute from "./authendication/AdminRoute";
import Dashboard from "./Pages/dashboard/Dashboard";
import AddAdmin from "./Pages/dashboard/AddAdmin";
import AddService from "./Pages/dashboard/AddService";

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
<Route element={<AdminRoute/>}>
  <Route path='/dashboard' element={<Dashboard/>}>

<Route path='addAdmin' element={<AddAdmin></AddAdmin>}></Route>
<Route path='addService' element={<AddService></AddService>}></Route>
  </Route>
</Route>

        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
