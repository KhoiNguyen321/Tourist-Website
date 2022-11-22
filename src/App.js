import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ModelProvider from './context/providers/ModelProvider';
function App() {
  return (
    <Router>
      <ModelProvider>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ModelProvider>
    </Router>
  );
}

export default App;
