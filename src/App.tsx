import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Info from "./components/info/Info"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Info />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
