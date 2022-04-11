import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
  const {user, signInWithGoogle} = useFirebase();

  // console.log(user)
  return (
    <div className='register_form w-50 mx-auto'>
      <h2 className='text-success mt-3'>Please Register</h2>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Register
  </Button>
</Form><br />
<div className="with_reg">
<Button onClick={signInWithGoogle} variant="info">Signin with google</Button>
</div>
    </div>
  );
};

export default Register;