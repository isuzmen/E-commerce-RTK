import './App.css'
import Container from '@mui/material/Container';
import Header from './components/navbar/Header';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';

function App() {

  return (
    <div className='m-0 p-0'>
      <Container maxWidth="lg">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route  path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
      </Container>
    </div>
  )
}

export default App
