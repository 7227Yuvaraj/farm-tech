import './App.css';
import Yuvaraj from './Components/Yuvaraj';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Container from './Components/Container';

function App() {
  return (
   <>
     <BrowserRouter>
     <Routes>
     <Routes path='/' element={<Yuvaraj/>}/>
     <Routes path='/landingpage' element={<Container>}/>
    </Routes>
    </BrowserRouter>
   </>
    );
}

export default App;
