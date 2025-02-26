import './App.css';
import Container from '@mui/material/Container';
import Header from './components/navbar/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import ProductDetail from './pages/ProductDetail';
import AuthPage from './pages/AuthPage';
import { useSelector } from 'react-redux';

function App() {
  const [colorPageFromHeader, setColorPageFromHeader] = useState(false);
  const user = useSelector(state => state.auth.user);

  const handleColorChange = (newColorState) => {
    setColorPageFromHeader(newColorState);
  };

  return (
    <div className='m-0 p-0'>
      <Container maxWidth="lg">
        <BrowserRouter>
          <Header onColorChange={handleColorChange} />
          <Routes>
            {!user ? (
              <>
                <Route path="/auth" element={<AuthPage colorPage={colorPageFromHeader} />} />
                <Route path="*" element={<Navigate to="/auth" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home colorPage={colorPageFromHeader} />} />
                <Route path="/products/:id" element={<ProductDetail colorPage={colorPageFromHeader} />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
