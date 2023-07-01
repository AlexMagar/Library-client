import React from 'react'
import Form from 'react-bootstrap/Form'

export const CustomLoginInput = ({label, ...rest}) => {
  return (
    <Form.Group className='mb-3'>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} />
    </Form.Group>
  )
}