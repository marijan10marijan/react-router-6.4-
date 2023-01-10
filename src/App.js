// IMPORT ROUTER 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// IMPORT JS PAGES FILE
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';

// IMPORT LAYOUTS FOR ROUTING
import RootLayout from "./layouts/RootLayout";

//ERROR MESSAGE PAGE
import NotFound from "./pages/NotFund";

import Faq from './pages/helpPages/Faq';
import Contact from './pages/helpPages/Contact';


// BROWSER ROUTER VARIABLE
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>

  );
}


export default App;
