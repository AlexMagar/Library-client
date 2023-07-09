import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { UserLayout } from '../../components/layout/UserLayout'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';
import { fetchBurrowAction } from './burrowAction';

export const BurrowHistory = () => {
  const dispatch = useDispatch();
  const {burrows} = useSelector(state => state.burrowInfo);
  const {user} = useSelector(state => state.userInfo);
  console.log(burrows)

  useEffect(() => {
    dispatch(fetchBurrowAction());
  }, [dispatch]);


  const handleOnReturn = () =>{
    if(window.confirm("Are you sure want to return the book")){
      
    }
  }
  return (
    <UserLayout title="BurrowHistory">
      <Table striped bordered hover>
    <thead>
      <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Book Name</th>
          <th>Student Name</th>
          <th>Burrow Date</th>
          <th>Return Date</th>
          <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        burrows.map((item, i) => (
        <tr key={item._id}>
          <td>{i +1}</td>
          <td><img src={item.thumbnail} width="150px" alt='' /> </td>
          <td>{item.bookName}</td>
          <td>{item.userName}</td>
          <td>{item.dueDate.slice(0,10)}</td>
          <td>
            {
              item.userId === user._id && <Button onClick={handleOnReturn}>Return</Button>
            }
          </td>
        </tr>
        )
      )}
    </tbody>
  </Table>
    </UserLayout>
  )
}
