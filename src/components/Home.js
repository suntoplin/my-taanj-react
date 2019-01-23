import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import HomeData from '../data/HomeData';


function Image(props) {
    const { source } = props;
    return <LazyLoadImage alt={" "} effect="blur" width={`100%`} src={require(`../${source}`)} />;
}



export default class Home extends React.PureComponent {
    render() {
        const viewPortWidth = window.innerWidth;
        const isMobile = viewPortWidth < 600;

        return (
            <div>
                <Container>
                    <Row>
                        {HomeData.events.map((event, id) =>
                            <Col
                                key={id}
                                md={isMobile ? 12 : 6}
                            >
                                {event.date}
                                {event.photos.map((image, i) =>
                                    <div key={i}>
                                        <Image source={image.img} />
                                    </div>
                                )}
                                <Divider />
                            </Col>
                        )}
                    </Row>
                </Container>
                <br />
            </div>
        );
    }
}