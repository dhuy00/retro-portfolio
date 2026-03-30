import './App.css'
import Navigation from './components/nav/Navigation'
import CustomCursor from './components/CustomCursor'
import Hero from './pages/Hero'
import About from './pages/About'
import Background from './components/background/Background'
import Skills from './pages/Skills'
import SectionBreak from './components/common/SectionBreak'
import Projects from './pages/Projects'

function App() {

  return (
    <div className=' h-screen w-screen overflow-x-hidden pb-12'>
      <Background/>
      {/* <CustomCursor/> */}
      <Navigation/>
      <Hero/>
      <About/>
      <SectionBreak/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
