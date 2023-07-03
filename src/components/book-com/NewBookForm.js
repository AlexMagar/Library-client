import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../custom-input/CustomInput'
import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from '../layout/UserLayout';
import { postBookAction } from '../../pages/books/bookAction';
import { useNavigate } from 'react-router-dom';

export const NewBookForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.userInfo); //userInfo comes from store
  const [form, setForm] = useState({})

  const handleOnChange = (e) =>{
    const{name, value} = e.target;

    setForm({
        ...form,
        [name]: value
    })
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    if(window.confirm(`Do you want to add this ${form.title} Book to DB`)){
        const isAdded = dispatch(postBookAction(form));
        isAdded && navigate("/books");
    }
  }

    const inputs = [
        {
            label: "Book title",
            name: "title",
            type: 'text',
            placeholder: 'How to become js pro',
            required: true,
        },
        {
            label: "Author",
            name: "author",
            type: 'text',
            placeholder: 'Uncle Bob',
            required: true,
        },
        {
            label: "Year",
            name: "year",
            type: 'number',
            required: true,
        },
        {
            label: "Thumbnail",
            name: "thumbnail",
            type: 'url',
            placeholder: 'http://....',
            required: true,
        },
        {
            label: "Summary",
            name: "summary",
            type: 'text',
            as: 'textarea',
            placeholder: 'book summary....',
            required: true,
            rows: 6,
        }
    ]

  return (
    <UserLayout title="Add New Book">
        {
            user?.role !== "admin" ? (
                <h1>Unauthorized Access</h1>
            ) :(
                <div className='py-3'>

                    <Form onSubmit={handleOnSubmit}>
                        {
                            inputs.map((item, i) => 
                            <CustomInput key={i} {...item} onChange={handleOnChange}/>
                            )
                        }
                        {/* d-grid convert everything into block element */}
                        <div className='d-grid'> 
                        <Button variant='primary' type='submit'>Add Book</Button>
                        </div>
                    </Form>
                </div>
            )
        }
    </UserLayout>
  )
}
