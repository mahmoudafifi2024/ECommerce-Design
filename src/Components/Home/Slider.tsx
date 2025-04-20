import React from 'react';
import { Carousel } from 'react-bootstrap';

import sliderimg from "../../images/Slider/slider1.png";
import slider4 from "../../images/Slider/slider4.png";
import prod3 from "../../images/Slider/prod3.png";
import prod4 from "../../images/Slider/prod4.png";

interface SliderItem {
  id: string;
  image: string;
  title: string;
  text: string;
  background: string;
}

const Slider: React.FC = () => {
  const [index, setIndex] = React.useState<number>(0);

  const sliderItems: SliderItem[] = [
    {
      id: '1',
      image: slider4,
      title: 'هناك خصم كبير',
      text: 'خصم يصل ٥٠٪ عند شرائك',
      background: 'slider-background'
    },
    {
      id: '2',
      image: sliderimg,
      title: 'هناك خصم كبير',
      text: 'خصم يصل ٥٠٪ عند شرائك',
      background: 'slider-background2'
    },
    {
      id: '3',
      image: prod3,
      title: 'هناك خصم كبير',
      text: 'خصم يصل ٥٠٪ عند شرائك',
      background: 'slider-background3'
    },
    {
      id: '4',
      image: prod4,
      title: 'هناك خصم كبير',
      text: 'خصم يصل ٥٠٪ عند شرائك',
      background: 'slider-background4'
    }
  ];

  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect}
    >
      {sliderItems.map((item) => (
        <Carousel.Item 
          key={item.id}
          className={item.background} 
          interval={2000}
        >
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img
              style={{ 
                height: "296px", 
                width: item.id === '1' || item.id === '2' ? "313.53px" : "373.53px" 
              }}
              src={item.image}
              alt={`Slide ${item.id}`}
            />
            <div>
              <h3 className="slider-title">{item.title}</h3>
              <p className="slider-text">{item.text}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider; 