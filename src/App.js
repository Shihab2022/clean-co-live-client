import { Route, Routes } from 'react-router-dom';
import './App.css';
import { publicRoute } from './route/publicRoutes';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar>
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
  </Navbar>
    </div>
  );
}

export default App;
