import { Link } from "react-router";
import Nav from 'react-bootstrap/Nav';

const Navigation=()=>{
    return(
        <div>
            <h3>User Navigation</h3>
            {/* <Link to="/home">Home</Link>||
            <Link to="/about">About</Link>||
            <Link to="/contact">Contact</Link> */}



  
    <Nav as="ul">
      <Nav.Item as="li">
        <Nav.Link to="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link to="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link to="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  
 </div>
    )
}
export default Navigation;