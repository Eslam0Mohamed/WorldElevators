import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Gallery from "./components/gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return <>
<Navbar></Navbar>
<main id="main-content" role="main">
<Home></Home>
<About></About>
<Services></Services>
<Gallery></Gallery>
<Contact></Contact>
</main>
<Footer></Footer>
    </>
  
}

export default App
