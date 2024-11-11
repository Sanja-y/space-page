import React from 'react'

const Sidebar = (props) => {
  const { handleToggleModal, data } = props
  return (
    <div className='sidebar'>
      <div className="bgOverlay" />
      <div className='sidebarContents'>
        <h2>{data?.title}</h2>

        <div className='descriptionContainer'>
          <p className='descriptionTitle'>{data?.date}</p>
          <p className='description'>{data?.explanation}</p>
          <button onClick={() => { handleToggleModal() }}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
