import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { UserLayout } from '../../components/layout/UserLayout'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';
import { fetchBurrowAction, returnBurrowAction  } from './burrowAction';
import { ReviewForm } from '../../components/review/ReviewForm';
import { CustomInput } from '../../components/custom-input/CustomInput';
import { setModalShow } from '../../system/systemSlice';
import { CustomModel } from '../../components/modal/CustomModel';

export const BurrowHistory = () => {
  const dispatch = useDispatch();
  const [selectedReview, setSelectedReview] = useState({})
  const {burrows} = useSelector(state => state.burrowInfo);
  const {user} = useSelector(state => state.userInfo);
  // console.log(burrows)

  useEffect(() => {
    dispatch(fetchBurrowAction());
  }, [dispatch]);


  const handleOnReturn = ({bookId, _id}) =>{
    if(window.confirm("Are you sure want to return the book")){
      const obj = {bookId, burrowId: _id}
      dispatch(returnBurrowAction(obj));
    }
  }

  const handleOnReview = (burrowBook) => {
    console.log(burrowBook);
    setSelectedReview(burrowBook)
    dispatch(setModalShow(true))
    const {_id, bookId, bookName, userId, userName} = burrowBook;
  }

  return (
    <UserLayout title="BurrowHistory">
      {
        selectedReview?._id && (
          <CustomModel modalTitle={`Leave your review `} >
            <ReviewForm selectedReview={selectedReview}/>
          </CustomModel>
      )}
      
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
              item.userId === user._id && !item.isRetured 
              ? (<Button onClick={ () => handleOnReturn(item)}>Return </Button>)
              : (<Button variant='success' onClick={ () => handleOnReview(item)}>Leave review</Button>)
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
