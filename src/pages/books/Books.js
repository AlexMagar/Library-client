import React from 'react'
import { UserLayout } from '../../components/layout/UserLayout'
import { useSelector } from "react-redux";

export const Books = () => {
  const {user} = useSelector((state) => state.userInfo);
  return  user?.role !== "admin"
    ? (<h1>Unauthorized access</h1>)
    :(<UserLayout title="Books">Books</UserLayout>);
}
