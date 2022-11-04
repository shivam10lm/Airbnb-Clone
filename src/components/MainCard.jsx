import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const MainCard = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      className="card-main"
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      sx={{ display: "flex", flexDirection: "row" }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          id="img-main"
          src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          id="img-main"
          src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          id="img-main"
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCard;
