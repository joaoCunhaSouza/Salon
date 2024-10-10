import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import {Header} from './pages/Header';
import { Features } from "./pages/Features";
import { Community } from "./pages/Community";
import { Blog } from "./pages/Blog";
import { Pricing } from "./pages/Pricing";
import { Register } from "./pages/Register";
import Container from './container';
import './style.css';

function App() {
  return (
    <>
      <Container>
        <Header /> {/* Use the Header component */}
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
}

export default App;
