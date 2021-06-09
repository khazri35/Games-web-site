import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
import './Slider.css'

const Slider = () => {
  return (
    <div classname="images">
      <h1>Game On Sale -15%</h1>
      <Carousel controls={false} fade={true} pause={false} interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-10"
            src={image1}
            style={{ height: '400px', width: '600px' }}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-10"
            src={image2}
            style={{ height: '400px', width: '600px' }}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-10"
            src={image3}
            style={{ height: '400px', width: '600px' }}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider
