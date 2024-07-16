import React from 'react'
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-item-center'>
    <RotatingLines
        visible={true}
        height="200"
        width="200"
        color="text-success"
        strokeWidth="5"
        animationDuration="0.75"
        />
    </div>
  )
}

export default Loading
