import { Link } from "react-router-dom"
export default function ThingsHome(){
    return(
      <div>
        <ul>
            <li><p><Link to="/Things/Vehicles">Vehichles</Link></p></li>
            <li><p><Link to="/Things/StarShips">StarShips</Link></p></li>
            <li> <p><Link to="/Things/Planets">Planets</Link></p></li>
        </ul>     
      </div>
    )
  }
  
