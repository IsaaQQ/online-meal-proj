
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleMeal from './pages/SingleMeal'

function App() {
  
  
  return (
    <div className='container-lg'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element = {<Homepage />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/meal/:id" element = {<SingleMeal />}/>
          <Route path="*" element = {<Error />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
