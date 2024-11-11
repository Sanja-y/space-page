import React from 'react'

const Main = (props) => {
  const {data} = props;
  return (
    <div className='imgContainer'>
      <img src={data?.hdurl ? data?.hdurl : 'landscape.jpg'} alt='Landscape' className='bgImage'/>
    </div>
  )
}

export default Main
