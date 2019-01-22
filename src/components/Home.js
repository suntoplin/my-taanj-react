import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import HomeData  from '../data/HomeData';

// import AboutImg from '../images/about.png';

// const Username = ({ username }) => <p>The logged in user is: {username}</p>;

class Username extends React.Component {
    render() {
        return <p>The logged in user is: {this.props.username}</p>;
    }
  }

export default class Home extends React.PureComponent {
    render() {
        const viewPortWidth = window.innerWidth;
        const isMobile = viewPortWidth < 600;

        return (
            <div>
                {/* <img src={require('../images/about.png')} alt=""/> */}
                <Container>
                    <Row>
                        {HomeData.events.map((event, id) =>
                            <Col
                                key={id}
                                md={isMobile ? 12 : 6}
                            >
                            {event.date}
                            {event.photos.images.map((image,i)=>
                                <div key={i}>
                                {/* {image.img} */}
                                {/* {getImage(image.img)} */}
                                <Username username={image.img}/>
                                {/* <span style={getImage(image.img)}></span> */}
                                {/* <img src={require(`${image.img}`)} alt={" "} key={image.img}/> */}
                                {/* <img src={'http://localhost:3000/images/'+ image.img } alt={" "} /> */}
                                </div>
                            )}


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