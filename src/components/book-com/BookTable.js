import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

export const BookTable = () => {

  const {books} = useSelector(state => state.bookInfo);
  console.log(books)
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Book Title</th>
          <th>Author Name</th>
          <th>year</th>
      </tr>
    </thead>
    <tbody>
      {
        books.map((item, i) => (
        <tr key={item._id}>
          <td>{i +1}</td>
          <td><img src={item.thumbnail} width="150px" alt='' /> </td>
          <td>{item.title}</td>
          <td>{item.author}</td>
          <td>{item.year}</td>
          <td><Link to={`/books/edit/${item._id}`}><Button variant='warning'>Edit</Button> </Link> </td>
        </tr>
        )
      )}
    </tbody>
  </Table>
  )
}
