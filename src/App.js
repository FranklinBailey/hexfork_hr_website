import './App.css';
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Home from './views/home';
import Login from './views/login';
import AddUser from './views/adduser';

function App() {
  return (
    <Router>

      <Container className='navBar'>

        <Nav className='navLinks'>

          <Nav.Item>
            <Nav.Link href='/'>
              <Link className='homeLink' to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='/'>
              <Link className='Login' to="/login">Login</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='/'>
              <Link className='Add User' to="/addUser">Add User</Link>
            </Nav.Link>
          </Nav.Item>

        </Nav>

      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>

    </Router>
  );
}

export default App;