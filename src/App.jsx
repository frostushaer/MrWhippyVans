import './App.css'
import AboutUs from './components/AboutUs'
import CardCarousel from './components/CardCarousel'
import Drip from './components/Drip'
import Footer from './components/Footer'
import IceCreamDrip from './components/IceCreanDrip'
import IceCreamBorderDemo from './components/IceCreamBorderDemo'
import LandingPage from './components/LandingPage'
import Menu from './components/Menu'
import Message from './components/Message'
import Navbar from './components/Navbar'
import { SwipeCarousel } from './components/SwipeCarousel'

function App() {

  return (
    <>
      <div>
        {/* <div className="header"></div> */}
        {/* <div className="divider"></div> */}
        <Navbar />
        <div className="header"></div>
        {/* <LandingPage /> */}
        
        {/* <Drip /> */}
        <SwipeCarousel />
        {/* <div className="divider-2"></div> */}
        <AboutUs />
        <Message />
        {/* <div className="divider-2"></div> */}
        {/* <IceCreamDrip position="top" /> */}
        <IceCreamBorderDemo />
        <CardCarousel />
        <Menu />
        <div className="divider-2"></div>
        <Footer />
      </div>
    </>
  )
}

export default App
