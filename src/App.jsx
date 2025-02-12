import './App.css'
import Container from '@mui/material/Container';
import Header from './components/navbar/Header';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

function App() {
  const [colorPageFromHeader,setColorPageFromHeader] = useState(false)

  const handleColorChange = (newColorState) => {
    setColorPageFromHeader(newColorState)
  }

  return (
    <div className='m-0 p-0'>
      <Container maxWidth="lg">
        <BrowserRouter>
            <Header onColorChange = {handleColorChange}/>
            <Routes>
                <Route  path='/' element={<Home colorPage ={colorPageFromHeader} />} />
            </Routes>
        </BrowserRouter>
      </Container>
    </div>
  )
}

export default App
