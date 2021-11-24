import React from 'react'
import classes from './aboutSection.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function AboutSection() {
    return (
        <section className={`px-4 px-lg-5 ${classes.main}`}>
            <Container>
                <h2 className="text-uppercase text-white p-2 mb-5">About me</h2>
                <Row>
                    <Col xs={1}></Col>
                    <Col>
                        <div className={classes.pic}></div>
                    </Col>
                    <Col xs={1}></Col>
                    <Col>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus odio id eleifend maximus. Donec tempor, mi quis vulputate fermentum, nunc sem lacinia nisi, vitae placerat diam nunc quis erat.
                            Sed ut convallis nunc. Aliquam porta laoreet lorem quis commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec mattis leo ac vestibulum gravida. Morbi aliquet, est in interdum
                            congue, risus elit fermentum justo, eget dignissim magna ante non tellus. Quisque ut ornare est.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus odio id eleifend maximus. Donec tempor, mi quis vulputate fermentum, nunc sem lacinia nisi, vitae placerat diam nunc quis erat.
                            Sed ut convallis nunc. Aliquam porta laoreet lorem quis commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec mattis leo ac vestibulum gravida. Morbi aliquet, est in interdum
                            congue, risus elit fermentum justo, eget dignissim magna ante non tellus. Quisque ut ornare est.
                        </p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </Container>
        </section>
    )
}
