import './App.css';
import {Route, Routes} from 'react-router-dom';
import People from './Pages/People';
import Home from './Pages/Home'
import Person from './Pages/Person'

function App() {
  return (
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/People" element= {<People/>}/>
      <Route path="/People/:id" element= {<Person/>}/>
    </Routes>
  );
}

export default App;
