import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container";


export default function Starship (){
    const {id} = useParams();
    const [starship, setStarship] = useState({});

    useEffect(() => {
        const getStarship = async () => {
          const response = await fetch(`https://swapi.dev/api/starships/${id}`);
          const responseJson = await response.json();    
          setStarship(responseJson);
        };
    
        getStarship();
      }, [id]);

    return(
        <Container>
        <h3> Details of starwars starship</h3>
        <hr />
        {id}
        <h4>Name: {starship.name}</h4>
        <h5>Consumables: {starship.consumables}</h5>
        <h5>Created : {starship.created} </h5>
        </Container>
    );
}