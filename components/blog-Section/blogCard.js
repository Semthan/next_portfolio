import React from 'react'
import Image from 'next/image'
import { Card, Button } from 'react-bootstrap'
import pic from '../../public/images/cs.jpg'

export default function BlogCard() {
    return (
        <div>
            <Card>
                <Image className="img-fluid rounded" src={pic} alt="profile-pic" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
