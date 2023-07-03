import './App.css';

import Menu from './components/Menu';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Vitievskii from './components/pages/Vitievskii/Vitievskii';
import Kurmaev from './components/pages/Kurmaev/Kurmaev';
import Ugadiarov from './components/pages/Ugadiarov/Ugadiarov';
import Chart from "react-apexcharts";
import { useEffect, useState } from 'react';

function App() {

  const [year, setYear] = useState(localStorage.getItem('year') || 2018);

  useEffect(() => {
    const storageListener = () => {
      const newYear = localStorage.getItem('year');
      if (newYear !== year) {
        setYear(newYear);
      }
    };

    window.addEventListener('storage', storageListener);

    return () => {
      window.removeEventListener('storage', storageListener);
    };
  }, [year]);

  return (
    <div>
   
      <div className='row'>
        <Menu/>
        <div className=''>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Ugadiarov />} />
              <Route path='/1' element={<Vitievskii />} year={year} />
             
              <Route path='/2' element={<Kurmaev />} year={year} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;