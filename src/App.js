import Description from "./Description";
import Image from "./Image";
import Name from "./Name";
import Price from "./Price";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Zelda from "./zelda.jpg"

export default function App() {
    var FirstName="Rami";
    return( <div className="Application">
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><Price/></Card.Subtitle>
        <Card.Text>
        <Description/>
        <Image/>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        {
            FirstName ? <p>Hi {FirstName} <img src={Zelda}/> </p> :
            <p>Hello There!</p>
        }
    </div>);
};