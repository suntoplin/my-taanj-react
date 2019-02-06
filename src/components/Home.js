import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

import Slider from "react-slick";

import Button from "muicss/lib/react/button";
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import HomeData from '../data/HomeData';
// import styles from '../index.css';

// functional component wi lazy load => lazy load causes additional files(Type: text/html)
// function Image(props) {
//     const { source } = props;
//     return <LazyLoadImage alt={" "} effect="blur" width={`100%`} src={require(`../${source}`)} />;
// }

// functional component wo lazy load
function Image(props) {
    const { source } = props;
    return <img alt={" "} width={`100%`} src={require(`../${source}`)} />
    ;
}

// pure component
// class Image extends React.PureComponent {
//     render() {
//         const { source } = this.props;
//         return <LazyLoadImage alt={" "} effect="blur" width={`100%`} src={require(`../${source}`)} />;
//     }
// }

export default class Home extends React.PureComponent {
    render() {
        const viewPortWidth = window.innerWidth;
        const isMobile = viewPortWidth < 600;

        const settings = {
            dots: true,
            infinite: true,
            lazyLoad: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };

        return (
            <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Blockquote</h1>
                        <blockquote >jewiotjew;gaoihdf ;oaihjn'</blockquote>
                    </Col>
                </Row>
            </Container>
                <Container>
                    <Row>
                        <Col md={12} className="mui--text-center">
                            <h2> Single Item</h2>
                            <Slider {...settings}>
                                {HomeData.events[0].photos.map((image, i) =>
                                    <div key={i} >
                                        <img src={require(`../${image.img}`)} alt={"test"} className="mui--text-center" />
                                        <h3>{image.img}</h3>
                                    </div>)}
                            </Slider>
                            <hr />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    {HomeData.events.map((event, id) =>
                        <Row key={id}>
                            <Col md={12}>Title: {event.date}</Col>
                            {event.photos.map((image, i) =>
                                <Col
                                    key={i}
                                    md={isMobile ? 12 : 3}
                                >
                                    <Image source={image.img} />
                                </Col>
                            )}
                            <Col md={12}>
                                <a href={event.link} target={"_blank"}>
                                    <Button color="primary">MORE</Button>
                                </a>
                            </Col>
                            <Divider />
                        </Row>
                    )}
                </Container>
                <br />
            </div>
        );
    }
}