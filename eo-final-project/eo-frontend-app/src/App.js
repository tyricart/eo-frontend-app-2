import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<h1>
        Page not found
      </h1>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
