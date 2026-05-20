import Navigation from './components/nav/Navigation'
import CustomCursor from './components/CustomCursor'
import Hero from './pages/Hero'
import About from './pages/About'
import Background from './components/background/Background'
import Skills from './pages/Skills'
import SectionBreak from './components/common/SectionBreak'
import Projects from './pages/Projects'
import TechStack from './pages/TechStack'
import Works from './pages/Works'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import PersonalInfo from './components/common/PersonalInfo'

function App() {

  return (
    <div className=' h-screen w-screen overflow-x-hidden scroll-smooth tracking-wide'>
      <Background/>
      {/* <CustomCursor/> */}
       <Navigation/>
       <Hero/>
       <About/>
       <TechStack/>
       <Works/>
       <Experience/>
      <PersonalInfo/>
    </div>
  )
}

export default App
