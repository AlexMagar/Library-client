import React from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { useSelector } from 'react-redux'
import { CustomCard } from '../../components/custom-card/CustomCard'
import { CustomCarousel } from '../../components/carousel/CustomCarousel'
import Container from 'react-bootstrap/esm/Container'
import { Row, Col, Form } from "react-bootstrap";

const Home = () => {

  const { books} = useSelector(state => state.bookInfo);

  return (

    <div>
      <Header />
      <section className='main'>
        <CustomCarousel />
        <Container className='m-5'>
          <Row>
            <Col>
            <div className='d-flex justify-content-between'>
              <div className="left">{books.length} Books found</div>
              <div className="righ">
                <Form.Control placeholder='search book by name' />
              </div>
            </div>
            <hr />
            <div className="book-list d-flex justify-content-between flex-wrap gap-3">
              {
                books.map((item) => (
                <CustomCard key={item._id} {...item}/>
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