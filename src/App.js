import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Details from './components/Details';
import SearchDisplay from './components/SearchDisplay';


function App() {     
  // const [filter, setFilter] = useState('');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='/movies/:id' element={<Details/>}/>
          <Route path='/' element={<SearchDisplay/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
