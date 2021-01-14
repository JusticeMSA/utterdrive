import React from 'react'
import {Card,Form, Button} from 'react-bootstrap'
import './signup.scss'

export default function Signup() {
    return (
        <div className='container'>
            <Card className='card'>
                <Card.Title className='card-tittle'>Sign Up</Card.Title>
                <Card.Body>
                <Form className='form'>
                    <Form.Group>
                        <Form.Label className='form-label'>Email</Form.Label>
                        <Form.Control type='email' name='email'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='form-label'>Password</Form.Label>
                        <Form.Control type='password' name='password'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='form-label'>Confirm Password</Form.Label>
                        <Form.Control type='password' name='confirmPassword'/>
                    </Form.Group>
                    <Button className='button' type='submit'>Signup</Button>
                </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
