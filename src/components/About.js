import React from 'react';

import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import AboutData from '../data/AboutData';

function Persion(props) {
    const { title, enName, twName, email } = props;
    return <div>
        <p>{title}</p>
        <p>{enName} {twName && <span> ({twName}) </span>}</p>
        <p>{email}</p>
    </div>;
}

export default function About() {
    const viewPortWidth = window.innerWidth;
    const isMobile = viewPortWidth < 600;
    return (
        <div>
            <Container>
                <Row>
                    {AboutData.people.map((person, id) =>
                        <Col key={id} md={isMobile ? 12 : 6}>
                            <Persion title={person.title} enName={person.name.en} twName={person.name.tw} email={person.email} />
                            <Divider />
                        </Col>
                    )}
                </Row>
            </Container>
            <br />
        </div>
    );

}