import './App.css';
import {Route, Routes} from 'react-router-dom';
import People from './Pages/People';
import Home from './Pages/Home';
import Person from './Pages/Person';
import Things from './Pages/Things';
import ThingsHome from './Pages/ThingsHome';
import StarShips from './Pages/StarShips';
import Vehicles from './Pages/Vehicles';
import Planets from './Pages/Planets';
import StarShip from './Pages/Starship';
import Vehicle from './Pages/Vehicle';
import Planet from './Pages/Planet'

function App() {
  return (
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/People" element= {<People/>}/>
      <Route path="/People/:id" element= {<Person/>}/>
      <Route path="Things" element={<Things/>}>
        <Route index element={<ThingsHome />}/>
        <Route path="/Things/StarShips" element={<StarShips/>}/>
        <Route path="/Things/StarShips/:id" element= {<StarShip/>}/>
        <Route path="/Things/Vehicles" element={<Vehicles/>}/>
        <Route path="/Things/Vehicles/:id" element= {<Vehicle/>}/>
        <Route path="/Things/Planets" element={<Planets/>}/>
        <Route path="/Things/Planets/:id" element= {<Planet/>}/>
      </Route>
    </Routes>
  );
}

export default App;
