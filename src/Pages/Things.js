import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

export default function Things(){
  return(
    <Container>
        <h3>Starwars Things</h3>
        <Outlet/>
    </Container>
  )
}
