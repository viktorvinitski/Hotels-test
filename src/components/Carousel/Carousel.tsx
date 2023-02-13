import React from 'react';
import Carousel from "react-bootstrap/Carousel";

interface Props {
    images: {url: string}[]
}

const CustomCarousel: React.FC<Props> = ({images}) => {
    return (
        <Carousel interval={null}>
            {images.map((item, index) => (
                <Carousel.Item key={item.url}>
                    <img
                        className="d-block w-100"
                        src={item.url}
                        alt={`${index} slide`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CustomCarousel;