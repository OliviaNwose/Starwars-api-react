import React from 'react'
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';


export default function Planets (){  
    const [planets, setPlanets] = useState([]);
    useEffect(() => {
       const getPlanets = async () => {
         const response = await fetch("https://swapi.dev/api/planets");
         const responseJson = await response.json();

         setPlanets(responseJson.results);
       };
       getPlanets();
    }, [])
    return(
    <Container>
    <h6>Starwars Planets and feautures</h6>    
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, index)=>(
                    <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{planet.name}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.climate}</td>
                    <td>
                      <Link to={ `/Things/Planets/ ${ index + 1}`}>Details</Link>
                    </td>
                  </tr>
        ))}
      </tbody>
    </Table>
    </Container>
    )
}