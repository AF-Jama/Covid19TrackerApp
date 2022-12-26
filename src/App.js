import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import VaccineCardComponent from './components/VaccineCardComponent';
import VaccinationDataComponent from './components/VaccinationDataComponent';
import VaccineUptakeComponent from './components/VaccineUptakeComponent';
import UKDeathComponent from './components/UKDeathDataComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
