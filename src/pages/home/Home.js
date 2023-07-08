import React, { useEffect, useState } from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { useSelector } from 'react-redux'
import { CustomCard } from '../../components/custom-card/CustomCard'
import { CustomCarousel } from '../../components/carousel/CustomCarousel'
import Container from 'react-bootstrap/esm/Container'
import { Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Home = () => {

  const { books} = useSelector(state => state.bookInfo);
  const [display, setDisplay] = useState([]);

  //it help to keep the data even if page is referece 
  useEffect(() =>{
    setDisplay(books);
  }, [books])

  const handleOnSearch = (e) => {
    const {value } = e.target;
    const filterBook = books.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));

    setDisplay(filterBook);
  }

  return (

    <div>
      <Header />
      <section className='main'>
        <CustomCarousel />
        <Container className='m-5'>
          <Row>
            <Col>
            <div className='d-flex justify-content-between'>
              <div className="left">{display.length} Books found</div>
              <div className="righ">
                <Form.Control onChange={handleOnSearch} placeholder='search book by name' />
              </div>
            </div>
            <hr />
            <div className="book-list d-flex justify-content-between flex-wrap gap-3">
              {
                display.map((item) => (
                  <Link to={`book/${item._id}`}>
                  <CustomCard key={item._id} {...item}/>
                  </Link>
                ))
              }
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  )
}

export default Home