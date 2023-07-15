import React from 'react'
import { Button, Form } from 'react-bootstrap'
import {CustomInput} from '../custom-input/CustomInput'
import { AiFillStar } from 'react-icons/ai'
import { useState } from 'react'
import { postReview } from '../../helper/axios'
import { Dispatch } from 'react-router-dom'

export const ReviewForm = ({selectedReview}) => {

    const dispatch = Dispatch()

    const [form, setForm] = useState({
        status: "inactive",
        star: 5,
    })

    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const {_id, bookId, bookName, userId, userName} = selectedReview;
        const obj = {
            burrowHistoryId: _id,
            bookId, bookName, userId, userName, ...form}
        return;
        postReviewAction(obj);

    }

  return (
    <div> 
        <Form onSubmit={handleOnSubmit}>
    <CustomInput label="Title" name="title" placeholder="Best book  ever" onChage={handleOnChange}/>

    <Form.Group className="mb-3">
      <Form.Label>Leave start</Form.Label>

      <div className="fs-3">
        <input type='radio' name='star' value='1' id='s1' onChange={handleOnChange}/>
        <label htmlFor='s1'>
        <AiFillStar />
        </label>
        <input type='radio' name='star' value='2' id='s2' onChange={handleOnChange}/>
        <label htmlFor='s1'>
        <AiFillStar />
        </label>
        <input type='radio' name='star' value='3' id='s3' onChange={handleOnChange}/>
        <label htmlFor='s1'>
        <AiFillStar />
        </label>
        <input type='radio' name='star' value='4' id='s4' onChange={handleOnChange}/>
        <label htmlFor='s1'>
        <AiFillStar />
        </label>
        <input type='radio' name='star' value='5' id='s5' onChange={handleOnChange}/>
        <label htmlFor='s1'>
        <AiFillStar />
        </label>

        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    </Form.Group>

    <CustomInput
      label="Review Message"
      name="message"
      as="textarea"
      rows="5"
      placeholder="Best book  ever, the way it is written and deliver the value"
      onChage={handleOnChange}
    />

    <div className="d-grid">
      <Button variant="success" type='submit'>Submit Review</Button>
    </div>
  </Form>
    </div>
  )
}
