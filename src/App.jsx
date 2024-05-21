import './App.css'
import Navbar from "../components/Navbar"
import Hero from '../components/Hero'
import Card from '../components/Card'
import Data from '../public/assests/data'
import Footer from '../components/Footer'

function App() {

  const cards = Data.map((item)=>{

    return(
      <Card
      key={item.id}
      item={item}
      />
    )

  })


  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
    </>
  )
  
}

export default App