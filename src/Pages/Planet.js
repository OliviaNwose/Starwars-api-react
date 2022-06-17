import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container";


export default function Planet (){
    const {id} = useParams();
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        const getPlanet = async () => {
          const response = await fetch(`https://swapi.dev/api/planets/${id}`);
          const responseJson = await response.json();
    
          setPlanet(responseJson);
        };
    
        getPlanet();
      }, [id]);

    return(
        <Container>
        <h3> Details of starwars planet</h3>
        <hr />
        <h4>Name: {planet.name}</h4>
        <h5>Diameter: {planet.diameter}</h5>
        <h5>Climate: {planet.climate}</h5>
        </Container>
    );
}