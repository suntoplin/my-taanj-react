import React, { Fragment } from 'react';

import Button from "muicss/lib/react/button";
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import HomeData from '../data/HomeData';

function Image(props) {
    const { source } = props;
    return <img alt={" "} width={`100%`} src={require(`../${source}`)} />;
}

function Albums(props) {
    const { photos, isMobile } = props;
    return <div>{photos.map((image, i) => <Col key={i} md={isMobile ? 12 : 3}><Image source={image.img} /></Col>)}</div>;
}

export default function Photos() {
    const viewPortWidth = window.innerWidth;
    const isMobile = viewPortWidth < 600;
    return (
        <Container>
            {HomeData.events.map((event, id) =>
                <Row key={id}>
                    <Col md={12}>
                        Title: {event.date}
                    </Col>
                    <Albums photos={event.photos} isMobile={isMobile} />
                    <Col md={12}>
                        <a href={event.link} target={"_blank"}><Button color="primary">MORE</Button></a>
                    </Col>
                    <Divider />
                </Row>
            )}
        </Container>
    );
}