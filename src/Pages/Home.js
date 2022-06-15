import React from "react";
import {Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export default function Home () {
return(
    <Container className="text-center p-3">
      <h3>Welcome</h3>
      <h5><Link to="/People">STARWARS PEOPLE</Link></h5>
    </Container>

)
}