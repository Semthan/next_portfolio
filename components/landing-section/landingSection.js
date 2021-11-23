import React from 'react';
import classes from './landingSection.module.css'
import Nav from './navBar'
import { Col, Container, Row } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaCodepen, FaGithub } from 'react-icons/fa'

export default function LandingSection() {
    return (
        <>
            <Nav />
            <header className={`d-flex ${classes.masthead}`}>
                <Container className="px-4 px-lg-5">
                    <Row className="align-items-center">
                        <Col>
                            <h1 className="mb-1">I'M SEMTHAN</h1>
                            <h3 className="mb-3"><em>I'M FULLSTACK DEVELOPER</em></h3>
                            <p>I am currently a student at Nackademin
                                school. I am working towards degree in</p>
                        </Col>
                        <Col xs={3}></Col>
                        <Col>
                            <div className={classes.circle}></div>
                        </Col>
                    </Row>
                    <Row>
                        <div >
                            <a href="https://www.linkedin.com/in/sarmad-a-99950697/"><FaLinkedin /></a>
                            <a href="https://github.com/Semthan"><FaGithub /></a>
                            <a href="https://codepen.io/Semthan"><FaCodepen /></a>
                            <a href="https://www.instagram.com/semthan.dev"><FaInstagram /></a>
                        </div>
                    </Row>
                </Container>
            </header>
        </>
    )
}
