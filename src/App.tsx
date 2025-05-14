import './App.css'
import About from './sections/About'
import Course from './sections/Course'
import Description from './sections/Description'
import Footer from './sections/Footer'
import GetCourse from './sections/GetCourse'
import Header from './sections/Header'
import Hero from './sections/Hero'

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Description />
      <Course />
      <GetCourse />
      <Footer />
    </main>
  )
}

export default App
