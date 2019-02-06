import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Slider from "react-slick";

import Button from "muicss/lib/react/button";
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import HomeData from '../data/HomeData';

// functional component
function Image(props) {
    const { source } = props;
    return <LazyLoadImage alt={" "} effect="blur" width={`100%`} src={require(`../${source}`)} />;
}

export default class Photos extends React.Component {
    render() {
        const viewPortWidth = window.innerWidth;
        const isMobile = viewPortWidth < 600;
        return (
            <div>
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
            </div>
        );
    }
}