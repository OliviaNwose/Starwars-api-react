import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';


export default function StarShips() {
    const [starships, setStarShips] = useState([]);
    useEffect(() => {
        const getStarShips = async () => {
            const response = await fetch("https://swapi.dev/api/starships");
            const responseJson = await response.json();

            setStarShips(responseJson.results);
        };
        getStarShips();
    }, [])
    return (
        <Container>
            <h6>Starwars Ships and features</h6>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Consumables</th>
                        <th>Created</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {starships.map((starship, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{starship.name}</td>
                            <td>{starship.consumables}</td>
                            <td>{starship.created}</td>
                            <td>
                                <Link to={`/Things/StarShips/ ${index + 2}`}>Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}