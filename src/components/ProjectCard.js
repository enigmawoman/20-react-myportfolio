import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// data from the portfolio page is passed in via props and each of the projects are passed in using the map function which will auto generate a card for each project
function ProjectCard(props) {
  return (
    <div className='cardContainer'>
     {props.myData.map(item => (
    <Card className='project-card' style={{ width: '20rem' }} key={item.id}>
      <Card.Img variant="top" src={item.image} className="card-image"/>
      <Card.Body>
        <Card.Title className='card-title'><h3>{item.name}</h3></Card.Title>
        <Card.Text>{item.text}</Card.Text>
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

