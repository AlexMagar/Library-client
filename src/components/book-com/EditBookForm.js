import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../custom-input/CustomInput'
import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from '../layout/UserLayout';
import { deleteBookAction, updateBookAction } from '../../pages/books/bookAction';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const EditBookForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {_id} = useParams();
  const {user} = useSelector((state) => state.userInfo); //userInfo comes from store
  const {books} = useSelector((state) => state.bookInfo);
  const [form, setForm] = useState({})

  useEffect(() => {
    if(_id !== form._id){
        const selectedBook = books.find((item) => item._id === _id)
        selectedBook?._id && setForm(selectedBook);
    }
  }, [_id, form._id, books])

  const handleOnChange = (e) =>{
    const{name, value} = e.target;

    setForm({
        ...form,
        [name]: value
    })
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();

    if(window.confirm(`Are you sure want to update the changes to ${form.title}`)){
        const isUpdated = dispatch(updateBookAction(form));
        isUpdated && navigate("/books");
    }
  }
  
  const handleOnDelete = () =>{
    console.log("Book info: ", form);
    if(window.confirm(`Are you sure you want to delete this Book? ${form.title}`)){
        const isDeleted =  dispatch(deleteBookAction(_id));
        isDeleted && navigate("/books");
    }
  }

    const inputs = [
        {
            label: "Book title",
            name: "title",
            type: 'text',
            placeholder: 'How to become js pro',
            required: true,
            value: form.title,
        },
        {
            label: "Author",
            name: "author",
            type: 'text',
            placeholder: 'Uncle Bob',
            required: true,
            value: form.author,
        },
        {
            label: "Year",
            name: "year",
            type: 'number',
            required: true,
            value: form.year,
        },
        {
            label: "Thumbnail",
            name: "thumbnail",
            type: 'url',
            placeholder: 'http://....',
            required: true,
            value: form.thumbnail,
        },
        {
            label: "Summary",
            name: "summary",
            type: 'text',
            as: 'textarea',
            placeholder: 'book summary....',
            required: true,
            rows: 6,
            value: form.summary,
        }
    ]

  return (
    <UserLayout title="Edit Book">
        {
            user?.role !== "admin" ? (
                <h1>Unauthorized Access</h1>
            ) :(
                <div className='py-3'>
                    <Link to="/books" ><Button variant='secondary'>&lt; Back</Button></Link>
                    <Form onSubmit={handleOnSubmit}>
                        {
                            inputs.map((item, i) => 
                            <CustomInput key={i} {...item} onChange={handleOnChange}/>
                            )
                        }
                        {/* d-grid convert everything into block element */}
                        <div className='d-flex'> 
                        <Button variant='primary' type='submit'>Update Book</Button>
                        </div>
                    </Form> 
                    <div className='text-end'> 
                        <Button variant='danger' type='submit' onClick={handleOnDelete}>Delete Book</Button>
                    </div>
                </div>
            )
        }
    </UserLayout>
  )
}
