import React from 'react'
import LeftSideBar from './LeftSideBar'

const AppLayout = (props) => {
  return (
    <div>
        <LeftSideBar></LeftSideBar>
        {props.children}
      
    </div>
  )
}

export default AppLayout
