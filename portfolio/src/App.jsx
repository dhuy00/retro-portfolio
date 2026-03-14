import './App.css'
import Navigation from './components/nav/Navigation'
import CustomCursor from './components/CustomCursor'
import Hero from './components/hero/Hero'

function App() {

  return (
    <div className=' h-screen w-screen overflow-x-hidden'>
      {/* <CustomCursor/> */}
      <Navigation/>
      <Hero/>
    </div>
  )
}

export default App
