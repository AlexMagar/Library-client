import React from 'react'
import { Form } from 'react-bootstrap'

export const CustomInput = ({label, ...rest}) => {
  return (
    <Form.Group className='mb-3'>
        <Form.label>{label}</Form.label>
        <Form.Control { ...rest} />
    </Form.Group>
  )
}
