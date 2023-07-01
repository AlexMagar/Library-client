import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiFillHome, AiFillDashboard} from 'react-icons/ai'
import {BiSolidLogIn} from 'react-icons/bi'
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { setUser } from '../../pages/signup-signin/userSlice';
import { persistor } from "../../store";

export const Header = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.userInfo);

  const handleOnSignOut = () =>{
    //remove from Persist
    persistor.purge().then(() => {
      console.log("Signed out")
    });
    //remove user for the redux
    dispatch(setUser({}));
  };
  return (
    <div>
        <Navbar expand="md" bg="dark" variant='dark'>
            <Container>
              <Navbar.Brand className="nav-link" to="/">LM</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  {user?._id ? (
                    <>
                    <Link className="nav-link" to="/"><AiFillHome className='fs-3'/> Home</Link>
                    <Link className="nav-link" to="/dashboard"> <AiFillDashboard className='fs-3'/> Dashboard</Link>
                  <Link className="nav-link" to="#link"> <FaSignOutAlt className='fs-3'/> Sign out</Link>
                    </>
                  ) :(
                    <>
                    <Link className="nav-link" to="/login"> <BiSolidLogIn className='fs-3'/> Sign in</Link>
                  <Link className="nav-link" to="/new-admin"> <FaSignOutAlt className='fs-3'/> Sign up</Link>
                    </>
                  )}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
