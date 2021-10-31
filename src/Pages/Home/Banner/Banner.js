import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-hieght"
                        src="https://www.aigtravel.com.au/home/_jcr_content/root/teaser.coreimg.jpeg/1613495585277/beach-couple-on-chairs-01.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Discover a New Place</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-hieght"
                        src="https://hrasiamedia.com/2017/wp-content/uploads/2020/08/20200824-HRA-Thailand-Stimulus-Boost-Image.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>You are Born to Tavel</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-hieght"
                        src="https://i.dawn.com/primary/2019/06/5d02a993e2dfa.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We Dream of Travel</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;