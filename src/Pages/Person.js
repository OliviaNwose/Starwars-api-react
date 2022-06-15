import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container";


export default function Person (){
    const {id} = useParams();
    const [person, setPerson] = useState({});

    useEffect(() => {
        const getPerson = async () => {
          const response = await fetch(`https://swapi.dev/api/people/${id}`);
          const responseJson = await response.json();
    
          setPerson(responseJson);
        };
    
        getPerson();
      }, [id]);

    return(
        <Container>
        <h3> Details of starwars person</h3>
        <hr />
        <h4>Name:{person.name}</h4>
        <h5>Hair color:{person.hair_color}</h5>
        </Container>
    );
}