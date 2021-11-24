import React from 'react'
import classes from './ProjectsSection.module.css'
import { Container, Row } from 'react-bootstrap'

export default function ProjectsSection() {
    return (
        <section className={`px-4 px-lg-5 ${classes.main}`}>
            <Container className="px-4 px-lg-5">
                <h2 className="text-uppercase text-white p-2 mb-5">Projects</h2>
                <Row className="">

                </Row>
            </Container>
        </section >
    )
}
