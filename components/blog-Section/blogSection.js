import React from 'react'
import Link from 'next/link'
import classes from './blogSection.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import BlogCard from './blogCard'

export default function BlogSection() {
    return (
        <section className={`px-4 px-lg-5 ${classes.main}`}>
            <Container>
                <h2 className="text-uppercase text-white p-2 mb-5">blog</h2>
                <Row className="justify-content-center">
                    <Col xs={4}>
                        <BlogCard />
                    </Col>
                    <Col xs={4}>
                        <BlogCard />
                    </Col>
                    <Col xs={4}>
                        <BlogCard />
                    </Col>
                </Row>
                <Link href="blog" />
            </Container>
        </section >
    )
}
