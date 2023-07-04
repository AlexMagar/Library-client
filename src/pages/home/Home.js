import React from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { useSelector } from 'react-redux'
import { CustomCard } from '../../components/custom-card/CustomCard'
import { CustomCarousel } from '../../components/carousel/CustomCarousel'

const Home = () => {

  const { books} = useSelector(state => state.bookInfo);

  return (

    <div>
      <Header />
      <section className='main'>
        <CustomCarousel />
        <div className="book-list">
          {
            books.map((item) => (
              <div>{item.title}</div>
            ))
          }
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home