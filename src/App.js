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
          <Route path = '/' element ={<Starting />} />
          <Route path = "/tyleroni" render={<Layout />} >
            <Route path = '/tyleroni/Home' render = {<Home />} />
            <Route path = '/tyleroni/projects' render = {<Projects />} />
            <Route path = '/tyleroni/contact' render = {<Contact />} />
            <Route path = '/tyleroni/mindtreasure/case/study' render = {<MindTreasure />} />
            <Route path = '/tyleroni/impromptu/case/study' render = {<Impromptu />} />
            <Route path = '/tyleroni/quickfit/case/study' render = {<QuickFit />} />
            <Route path = '/tyleroni/sugarcube/case/study' render = {<SugarCube />} />
          </Route>
        </Routes> 
      
    </>
  );
}

export default App
//