import React from 'react'
import {Card,Form, Button} from 'react-bootstrap'
import './signup.scss'
import useForm from './hooks/useForm'

export default function Signup() {
    console.log('Rendering Signup');
    const {handleChange, handleSubmit, inputErrors} = useForm()
    // const [serverError, setServerError] = useState('');
    return (
        <div className='container'>
            <Card className='card'>
                <Card.Body className='card-body'>
                <Card.Title className='card-tittle'>Sign Up</Card.Title>
                    {/* <Alert className='alert' variant='danger'>{serverError}</Alert> */}
                <Form className='form' onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label className='form-label'>Email</Form.Label>
                        <Form.Control type='email' name='email' onChange={handleChange}/>
                        <Form.Text style={{color: 'red'}}>{inputErrors.email}</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='form-label'>Password</Form.Label>
                        <Form.Control type='password' name='password' onChange={handleChange}/>
                        <Form.Text style={{color: 'red'}}>{inputErrors.password}</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='form-label'>Confirm Password</Form.Label>
                        <Form.Control type='password' name='confirmPassword' onChange={handleChange}/>
                        <Form.Text style={{color: 'red'}}>{inputErrors.confirmPassword}</Form.Text>
                    </Form.Group>
                    <Button className='button' type='submit'>Signup</Button>
                </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
