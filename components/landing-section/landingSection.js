import React from 'react';
import classes from './landingSection.module.css'
import Logo from './logo'
import { Col, Container, Row } from 'react-bootstrap';

export default function LandingSection() {

    return (
        <Container fluid className="border border-5">
            <header className={classes.hero}>
                <Row className="border border-2">
                    <Col xs={3}>
                        <Logo />
                    </Col>
                    <Col>g</Col>
                </Row>
                <Row className="align-items-end">
                    <Col xs={1}>b</Col>
                    <Col xs={5}>
                        <h1 className={classes.h1}>HELLO! I'M SEMTHAN </h1>
                        <h3 className={classes.h3}>I'M FULLSTACK DEVELOPER</h3>
                        <p className={classes.p}>I am currently a student at Nackademin
                            school. I am working towards degree in
                            web developmnet
                        </p>
                    </Col>
                    <Col xs={1}>b</Col>
                    <Col xs={4}>
                        <div className={classes.circle}></div>
                    </Col>
                </Row>
                <Row className="align-items-end">
                    <Col>b</Col>
                </Row>
            </header>
        </Container >
    )
}
