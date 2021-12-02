import React from 'react'
import Link from 'next/link'
import classes from './projectsSection.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './projectCard'

export default function ProjectsSection() {
    return (
        <section className={`px-4 px-lg-5 ${classes.main}`}>
            <Container>
                <h2 className="text-uppercase text-white p-2 mb-5">Projects</h2>
                <Row className="justify-content-center">
                    <Col xs={4} className="m-5">
                        <ProjectCard />
                    </Col>
                    <Col xs={4} className="m-5">
                        <ProjectCard />
                    </Col>
                </Row>
                <Link href="/projects">More</Link>
            </Container>
        </section >
    )
}
