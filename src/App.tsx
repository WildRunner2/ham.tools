import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import UsefulLinks from './pages/UsefulLinks';
import Login from './pages/Login';
import Register from './pages/Register';
import IframeConfig from './pages/IframeConfig';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/useful-links" element={<UsefulLinks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/iframe-config" element={<IframeConfig />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
