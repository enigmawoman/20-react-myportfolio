import Carousel from 'react-bootstrap/Carousel';
import website from '../assets/images/website.png'

function MyCarousel() {
    return (
      <Carousel>
        <Carousel.Item>

            <p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/TMD_9xLZBng" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></p>
        </Carousel.Item>
        <Carousel.Item>
             <p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/6507WZ-xM1E" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></p>
        </Carousel.Item>
        <Carousel.Item>
        <p align="center"><a href="https://www.pcbtrain.co.uk/"><img
            className="website-image"
            src={website}
            alt="Third slide"
          /></a></p>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default MyCarousel;