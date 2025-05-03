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
        <Route path='/club1' element={<ClubOne />} />
        <Route path='/club2' element={<ClubTwo />} />
        <Route path='/club3' element={<ClubThree />} />
      </Routes>
    </Router>
  )
}

export default App;
