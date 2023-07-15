import React from 'react'
import { useSelector } from 'react-redux'

export const Reviews = () => {
    const {reviews} = useSelector((state) => state.reviewInfo);
  return (
    <div>
        
    </div>
  )
}
