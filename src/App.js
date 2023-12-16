import './App.css';
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Home from './views/home';
import Login from './views/login';
import CreateAccount from './views/createAccount';

function App() {
  return (
    <Router>

      <Container className='navBar'>

        <Nav className='navLinks'>

          <Nav.Item>
            <Nav.Link href='/'>
              <Link className='homeLink' to="/" />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='/'>
              <Link className='Login' to="/login">Login</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='/'>
              <Link className='Create Account' to="/createAccount">Create Account</Link>
            </Nav.Link>
          </Nav.Item>

        </Nav>

      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>

    </Router>
  );
}

export default App;