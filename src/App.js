import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import ClubOne from './pages/ClubOne';
import ClubTwo from './pages/ClubTwo';
import ClubThree from './pages/ClubThree';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/NU-Wizards-Circle' element={<ClubOne />} />
        <Route path='/NU-Google-Developer-Students-Club' element={<ClubTwo />} />
        <Route path='/NU-Political-Science-Society' element={<ClubThree />} />
      </Routes>
    </Router>
  )
}

export default App;
