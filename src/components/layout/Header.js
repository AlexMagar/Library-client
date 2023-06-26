import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiFillHome, AiFillDashboard} from 'react-icons/ai'
import {BiSolidLogIn} from 'react-icons/bi'
import { FaSignOutAlt } from "react-icons/fa";

export const Header = () => {
  return (
    <div>
        <Navbar expand="md" bg="dark" variant='dark'>
            <Container>
              <Navbar.Brand href="#home">LM</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">
                    <AiFillHome className='fs-3'/> Home</Nav.Link>
                  <Nav.Link href="#link"> <AiFillDashboard className='fs-3'/> Dashboard</Nav.Link>
                  <Nav.Link href="#link"> <BiSolidLogIn className='fs-3'/> Sign in</Nav.Link>
                  <Nav.Link href="#link"> <FaSignOutAlt className='fs-3'/> Sign out</Nav.Link>
                  <Nav.Link href="#link"> <FaSignOutAlt className='fs-3'/> Sign up</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
