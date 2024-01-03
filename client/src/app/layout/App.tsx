import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';

import About from '../../features/about/About';
import Catalog from '../../features/catalog/Catalog';
import Contact from '../../features/contact/Contact';
import ProductDetails from '../../features/details/ProductDetails';
import Home from '../../features/home/Home';
import Header from './Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route } from 'react-router-dom';
import ServerError from '../errors/ServerError';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  //palletType
  const palleteType = darkMode ? 'dark' : 'light';
  ///theme config
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === 'light' ? '#DCDCDC' : '#121212',
      },
    },
  });

  const themeChangeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" />

      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={themeChangeHandler} />
      <Container>
        <Route path="/home" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/details/:id" component={ProductDetails} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/server-error" component={ServerError} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
