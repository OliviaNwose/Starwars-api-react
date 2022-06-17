import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container";


export default function Vehicle (){
    const {id} = useParams();
    const [vehicle, setVehicle] = useState({});

    useEffect(() => {
        const getVehicle = async () => {
          const response = await fetch(`https://swapi.dev/api/vehicles/${id}`);
          const responseJson = await response.json();
    
          setVehicle(responseJson);
        };
    
        getVehicle();
      }, [id]);

    return(
        <Container>
        <h3> Details of starwars vehicle</h3>
        <hr />
        <h4>Name: {vehicle.name}</h4>
        <h5>Model: {vehicle.model}</h5>
        <h5>Consumables: {vehicle.consumables}</h5>
        </Container>
    );
}