import './App.css'
import Navigation from './components/nav/Navigation'
import CustomCursor from './components/CustomCursor'
import Hero from './pages/Hero'
import About from './pages/About'
import Background from './components/background/Background'

function App() {

  return (
    <div className=' h-screen w-screen overflow-x-hidden pb-12'>
      <Background/>
      {/* <CustomCursor/> */}
      <Navigation/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
