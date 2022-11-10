// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function EventCard(props) {
  console.log(props);
  const imgLink = "http://localhost:8080/img/" + props.image;
  var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={imgLink} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{new Date(props.date).toLocaleTimeString("en-IN",options)}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default EventCard;