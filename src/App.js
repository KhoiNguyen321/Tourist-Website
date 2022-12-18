import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Details from './pages/Details';
import ModelProvider from './context/providers/ModelProvider';
import NavProvider from './context/providers/NavProvider';
import DestinationsProvider from './context/providers/DestinationsProvider';
import Nav from './components/Nav';
import Toggle from './components/Toggle';

function App() {
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <DestinationsProvider>
            <Toggle />
            <Nav />
            <HelmetProvider>
              <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' exact element={<About />} />
                <Route path='/details/:id' exact element={<Details />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </HelmetProvider>
          </DestinationsProvider>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
