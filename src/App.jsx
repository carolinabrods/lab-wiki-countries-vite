import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CountryDetailsPage from './pages/CountryDetailsPage';

// Iteration 2: Create Routes
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/countries/:countryId' element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
