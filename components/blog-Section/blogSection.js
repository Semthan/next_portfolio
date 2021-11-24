import React from 'react'
import classes from './blogSection.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function BlogSection() {
    return (
        <section className={`px-4 px-lg-5 ${classes.main}`}>
            <Container>
                <h2 className="text-uppercase text-white p-2 mb-5">blog</h2>
                <Row className="justify-content-center">
                    <Col xs={4} className="m-5">

                    </Col>
                    <Col xs={4} className="m-5">

                    </Col>
                    <Col xs={4} className="m-5">

                    </Col>
                </Row>
                <p>More projects button..</p>
            </Container>
        </section >
    )
}
