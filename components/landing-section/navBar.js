import React from 'react'
import { Col, Container, Navbar } from 'react-bootstrap'

export default function NavBar() {
    return (
        <>
            <Navbar className="navbar-expand-lg navbar-dark fixed-top">
                <Container>
                    <a className="navbar-brand" href="#page-top">SEMTHAN</a>
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#i">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                    </ul>
                </Container>
            </Navbar>
        </>
    )
}
