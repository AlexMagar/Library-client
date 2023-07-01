import React, { Children } from 'react'
import { Header } from './Header'
import Container from 'react-bootstrap/esm/Container'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

export const UserLayout = ({title, Children}) => {
  return (
    <div>
        <div className="left-menu bg-dark text-light w-20" >
            <div className='text-center mt-3'>Admin</div>
            <hr />
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard </Link>
                </li>
            </ul>
        </div>
        <div className='right-page' >
            <Header />
            <Container className='main'>
                <h1 className='mt-2'>{title}</h1>
                <hr />
                {Children}
            </Container>
            <Footer />
        </div>
    </div>
  )
}
