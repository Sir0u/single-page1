import About from "./components/about/About"
import Info from "./components/info/Info"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Info />
        <About />
      </main>
    </>
  )
}

export default App
