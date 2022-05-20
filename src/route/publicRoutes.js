
// import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
// import Service from '../Pages/Service/Service';


export const publicRoute = [
    { path: "/", name: "Home", Component: Home },
    // { path: "/about", name: "About", Component: About },
    // { path: "/services", name: "Services", Component: Service },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/login", name: "Login", Component: Login },
  ];