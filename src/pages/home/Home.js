import React from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { useSelector } from 'react-redux'
import { CustomCard } from '../../components/custom-card/CustomCard'

const Home = () => {

  const { books} = useSelector(state => state.bookInfo);

  return (

    <div>
      <Header />
      <section className='main'>
        <div className='hero'>
          Slider
        </div>
        <div className="book-list">
          {
            books.map((item) => (
              <CustomCard key={item._id}{...item}/>
            ))
          }
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home