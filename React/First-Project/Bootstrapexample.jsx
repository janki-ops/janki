import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Stack,Button,Form } from 'react-bootstrap'; 

export const Bootstrapexample = () => {
  return (
    <div>
    <h3>Bootstrap Example</h3>
    <button className='btn btn-success'>Add</button>
    <button className='btn btn-danger'>Cancel</button>
    <hr></hr>
    <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>

  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>

 <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </div>
  )
}

