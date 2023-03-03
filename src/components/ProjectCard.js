import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProjectCard(props) {
  return (
    <div className='cardContainer'>
     {props.myData.map(item => (
    <Card className='project-card' style={{ width: '20rem' }} key={item.id}>
      <Card.Img variant="top" src={item.image}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='card-buttons'>
        <a href={item.gitHub}><Button className="myButton" variant="primary">GitHub Repo</Button></a>
        <a href={item.deployLink}><Button className="myButton" variant="primary">Check it out</Button></a>
        </div>
      </Card.Body>
    </Card>
    ))}
    </div>
  );
}

export default ProjectCard;

