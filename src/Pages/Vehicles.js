import React from 'react'
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';


export default function Vehicles (){  
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
       const getVehicles = async () => {
         const response = await fetch("https://swapi.dev/api/vehicles");
         const responseJson = await response.json();

         setVehicles(responseJson.results);
       };
       getVehicles();
    }, [])
    return(
    <Container>
    <h6>Starwars Vehicles and feautures</h6>    
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Model</th>
          <th>Consumables</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((vehicle, index)=>(
                    <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{vehicle.name}</td>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.consumables}</td>
                    <td>
                      <Link to={ `/Things/Vehicles/ ${index + 4}`}>Details</Link>
                    </td>
                  </tr>
        ))}
      </tbody>
    </Table>
    </Container>
    )
}