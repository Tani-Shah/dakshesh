import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function DisplayCard({title, data}) {
  return (
    <>
      <Card className="text-white bg-dark text-center">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ListGroup variant="flush" className="text-light bg-dark text-center">
          {Object.entries(data).map( ([key, value]) => 
            <ListGroup.Item className="text-white bg-dark text-center" style={{fontSize: '0.95em'}}><a href={value} target="_blank"  className="text-light bg-dark">{key}<br/></a></ListGroup.Item>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
    </>
  );
}
  
export default DisplayCard;