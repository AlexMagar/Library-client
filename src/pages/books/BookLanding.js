import React from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { postBurrow } from '../../helper/axios'
import { addBurrowAction } from '../burrow-history/burrowAction'

const BookLanding = () => {
    const {_id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {books} = useSelector(state => state.bookInfo);
    const {user} = useSelector(state => state.userInfo)
    const {thumbnail, title, author, year, summary, isAvailable, dueDate} = books.find( (item) => item._id === _id) || {};

    console.log(dueDate)

    if(!title){
        navigate("/")
    }
    const handleOnBurrow = () => {
        if (window.confirm("Are you sure want to burrow this book")){
            const obj = {
                bookId: _id,
                bookName: title,
                thumbnail,
                userId: user._id,
                userName: user.fName,
            };
            dispatch(addBurrowAction(obj));
        }
    };

  return (
    <div>
        <Header />
        <section className='main mt-5 mb-5'>
            {/* {
                selectedBook?.thumbnail //?=> optional chaning
            } */}
            <Container >
                <Row>
                    <Col >
                    <img src={thumbnail} alt='' width="100%"/>
                    </Col>
                    <Col >
                    <h1>{title}</h1>
                    <p>{author} - {year}</p>
                    <p>5 star</p>
                    <p>{summary}</p>
                    {
                        user?._id
                        ? (<div className="d-grid">
                            {
                                isAvailable 
                                ? (
                                    <Button variant='dark' onClick={handleOnBurrow} >Burrow Now</Button>
                                )
                                : (
                                    <Button variant='dark' onClick={handleOnBurrow} disabled>
                                        Available from:{dueDate}
                                    </Button>
                                )
                            }
                        </div>
                        )
                        :(
                            <Link to="/login" className='nav-link'>
                            <div className="d-grid">
                            <Button variant='dark' onSubmit={handleOnBurrow}>Login to Burrow</Button>
                            </div>
                            </Link>
                        )
                    }
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                    <h3>Reviews</h3>
                    <hr/>
                    <div className='review-list'>
                        <div className="review pt-4 px-4 gap-3">
                            <div className="left-name">PA</div>
                            <div className="right-review">
                                <h3>Amazing book loved it</h3>
                                <div>5 star</div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, beatae voluptatum magni alias sed vero ullam praesentium cum quasi nostrum vel eius sequi aut ex. Corporis optio dolor ullam delectus?</p>
                            </div>
                            <p className='text-end'>- Laxman Magar</p>
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