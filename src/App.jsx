import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import {Header} from './pages/Header';
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
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
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        {/* Add other routes as needed */}
      </Routes>
    </>
  );
}

export default App;
