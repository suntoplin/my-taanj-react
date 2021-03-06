import React,{useState} from 'react';

import Slider from "react-slick";
import { Motion, spring } from 'react-motion';

import Button from "muicss/lib/react/button";
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import HomeData from '../data/HomeData';
// import styles from '../index.css';

function Image(props) {
    const { source } = props;
    return <img alt={" "} width={`100%`} src={require(`../${source}`)} />;
}

export default function Home() {
    const [openedTitle, setOpenedTitle] = useState(null);
    const viewPortWidth = window.innerWidth;
    const isMobile = viewPortWidth < 600;  
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const EventCarousel = (
        <Container fluid={true}>
            <Row>
                <Col md={12} className="mui--text-center" >
                    <h2 >react-slick carousel demo </h2>
                    <Slider {...settings}>
                        {HomeData.events[0].photos.map((image, i) =>
                            <div key={i}>
                                <img src={require(`../${image.img}`)} alt={"test"} width={'100%'} height={'100'} />
                                <h3> {image.img}</h3>
                            </div>)}
                    </Slider>
                    <hr />
                </Col>
            </Row>
        </Container>
    );

    function handleProgramClick (title)  {
        setOpenedTitle(openedTitle === title ? null : title)
    }
     const EventList = (
            <Container>
                <Row>
                    <Col><h2 className="mui--text-center">Todo list</h2></Col>
                </Row>
                {HomeData.events.map((item, eventIndex) => {
                    const isClosed = openedTitle === item.title.en;
                    return (
                        <Row key={eventIndex}  >
                            <div onClick={() => handleProgramClick(item.title.en)} >
                                <Col>
                                    Title: {item.title.en}

                                    <Motion
                                        defaultStyle={{ h: 0 }}
                                        style={{
                                            h: isClosed ?
                                                spring(130)
                                                : spring(0)
                                        }}>
                                        {({ h }) =>
                                            <div style={{ height: h }}>
                                                <div style={{ margin: 30, marginTop: 20 }}>
                                                    {isClosed && item.detail}
                                                </div>
                                            </div>
                                        }
                                    </Motion>
                                </Col>
                            </div>
                        </Row>
                    )
                })}
            </Container>
        );

        const Quote = (
            <Container>
                <Row>
                    <Col>
                        <h2 className="mui--text-center">modern quote</h2>
                        <blockquote >Ut nonummy habent soluta claritas veniam. Typi nunc soluta hendrerit mutationem sollemnes. Quis lius dolore et insitam vel. Aliquip consequat futurum claram ut mazim. Facilisi accumsan dolore ii imperdiet consequat. Claritatem aliquip quod putamus vulputate iusto. Doming minim typi zzril lius usus. In clari mutationem autem non sit. Qui augue mirum dynamicus gothica ut. Demonstraverunt soluta sequitur autem.</blockquote>
                    </Col>
                </Row>
            </Container>
        );

        const EventPhotos = (
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
        );

    return (
        <>
            {EventList}
            {Quote}
            {EventCarousel}
            {EventPhotos}
        </>
    );
}