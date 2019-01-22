import React from 'react';

// import Appbar from 'muicss/lib/react/appbar';
// import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import AboutData from '../data/AboutData';

export default class About extends React.PureComponent {
    render() {
        const viewPortWidth = window.innerWidth;
        const isMobile = viewPortWidth < 600;
        return (
            <div>
                <Container>
                    <Row>
                        {AboutData.people.map((person, id) =>
                            <Col
                                key={id}
                                md={isMobile ? 12 : 6}
                            >
                                <p>{person.title}</p>
                                <p>{person.name.en} {person.name.tw && <span> ({person.name.tw}) </span>}</p>
                                <p>{person.email }</p>
                                <Divider/>
                            </Col>
                        )}
                    </Row>
                </Container>
                <br/>
            </div>
        );
    }
}