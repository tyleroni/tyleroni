import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import MindTreasure from './Components/MindTreasure'
import Impromptu from './Components/Impromptu'
import QuickFit from './Components/QuickFit'
import SugarCube from './Components/SugarCube'
import Starting from './Components/Starting'




function App() {
  return (
    <>

        <Routes>
          <Route path = '/tyleroni/' element ={<Starting />} />
          <Route path = "/" element={<Layout />} >
            <Route path = '/tyleroni/Home' element = {<Home />} />
            <Route path = '/tyleroni/projects' element = {<Projects />} />
            <Route path = '/tyleroni/contact' element = {<Contact />} />
            <Route path = '/tyleroni/mindtreasure/case/study' element = {<MindTreasure />} />
            <Route path = '/tyleroni/impromptu/case/study' element = {<Impromptu />} />
            <Route path = '/tyleroni/quickfit/case/study' element = {<QuickFit />} />
            <Route path = '/tyleroni/sugarcube/case/study' element = {<SugarCube />} />
          </Route>
        </Routes> 
      
    </>
  );
}

export default App
//