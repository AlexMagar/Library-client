import React from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Col, Container, Row } from 'react-bootstrap'

const BookLanding = () => {
    const {_id} = useParams();
    const {books} = useSelector(state => state.bookInfo);
    const {user} = useSelector(state => state.userInfo)

    const {thumbnail, title, author, year, summary} = books.find((item) => item._id === _id) || {};
  return (
    <div>
        <Header />
        <section className='main mg-5'> 
        <Container>
            <Row>
                <Col>
                <img src={thumbnail} alt='' width='100%' />
                </Col>
                <Col>
                <h1>{title}</h1>
                <p>{author} - {year}</p>
                <p>5 star</p>
                <p>{summary}</p>
                {
                    user?._id ? (
                        <div className='d-grid'>
                            <Button variant='dark'>Burrow Now</Button>
                        </div>
                    )
                    :(
                        <Link to="/login" className='nav-link'>
                        <div className='d-grid'>
                            <Button variant='dark'>Login to Burrow this book</Button>
                        </div>
                        </Link>
                    )
                }
                </Col>
            </Row>
            <Row>
                <Col>
                <h3>Reviews</h3>
                <hr />
                <div className='review-list'>
                    <div className="review pt-4 px-4 gap-3">
                        <div className="left-name">
                            PA
                        </div>
                        <div className="right-review">
                            <h3>Amazing book loved it!</h3>
                            <div>5 star</div>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam odio, doloribus fuga reiciendis fugiat adipisci iure, rem expedita quam beatae. Aut culpa dicta ratione voluptatem, enim repudiandae quos ve
                            </p>
                            <div>- Laxman Magar</div>
                        </div>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        </section>
        <Footer />
    </div>
  )
}

export default BookLanding