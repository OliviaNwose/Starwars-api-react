import React from 'react'
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';


export default function People (){  
    const [people, setPeople] = useState([]);
    useEffect(() => {
       const getPeople = async () => {
         const response = await fetch("https://swapi.dev/api/people");
         const responseJson = await response.json();

         setPeople(responseJson.results);
       };
       getPeople();
    }, [])
    return(
    <Container>
    <h3>Starwars People</h3>    
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Height</th>
          <th>Hair color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index)=>(
                    <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{person.name}</td>
                    <td>{person.height}</td>
                    <td>{person.hair_color}</td>
                    <td>
                      <Link to={ `/People/ ${ index + 1}`}>Details</Link>
                    </td>
                  </tr>
        ))}
      </tbody>
    </Table>
    </Container>
    )
}