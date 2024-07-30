import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import LoginFailed from './components/pages/LoginFailed';
import NotFound from './components/pages/NotFound';
import Register from './components/pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginfailed" element={<LoginFailed />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
