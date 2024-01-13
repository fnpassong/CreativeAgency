import { Routes, Route } from 'react-router-dom';
import { Public } from './layout/Public';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Service } from './pages/Service';
import { Project } from './pages/Project';
import './App.scss'


function App() {
  

  return (
   <Routes>
    <Route path='/' element= {<Public/>} >
      <Route index element= {<Home/>} />
      <Route path='/about' element= {<About/>} />
      <Route path='/service' element= {<Service/>} />
      <Route path='/project' element= {<Project/>} />
    </Route>
   </Routes>
  )
}

export default App
