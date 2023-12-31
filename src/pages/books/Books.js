import React from 'react'
import { UserLayout } from '../../components/layout/UserLayout'
import { Button } from "react-bootstrap";
import { BookTable } from '../../components/book-com/BookTable';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Books = () => {

  const {user} = useSelector((state) => state.userInfo);
  return  user?.role !== "admin"
    ? (<h1>Unauthorized access</h1>)
    :(<UserLayout title="Books">
      <div className='text-end'>
        <Link to= "/books/new">
        <Button>Add New Book</Button>
        </Link>
      </div>
      <div className='mt-3'>{ <BookTable /> }</div>
    </UserLayout>
    );
}
