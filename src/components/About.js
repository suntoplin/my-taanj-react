import React from 'react';

// import Appbar from 'muicss/lib/react/appbar';
// import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
// import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import AboutData from '../data/AboutData';

export default class About extends React.PureComponent {   
    render() {
        const org = AboutData.boardMembers;
        console.log(org)

        return (
            <div>
                <Container>
                    <Row>
                        <Col>Col1</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}