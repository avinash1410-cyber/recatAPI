import React,{ useState } from 'react';
import './App.css';
import FeaturedProducts from './FeaturedProducts';
import { Navbar,Container,Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
return (

  <>
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Men</Nav.Link>
          <Nav.Link href="#features">Women</Nav.Link>
          <Nav.Link href="#pricing">Kids</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="#home">LogOut</Nav.Link>
          <Nav.Link href="#features">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </div>

    <div className='App'>
      <div>
           <br /><br /><br />
      </div>
      <FeaturedProducts />
    </div>

    </>
);
}

export default App;
