import React from 'react'

const LeftSideBar = () => {
  return (
    <>
<div className="sidebar" role="cdb-sidebar">
  <div className="sidebar-container">
    <div className="sidebar-header">
      <a className="sidebar-brand">Contrast</a>
      <a className="sidebar-toggler"><i className="fa fa-bars" /></a>
    </div>
    <div className="sidebar-nav">
      <div className="sidenav">
        <a className="sidebar-item">
          <div className="sidebar-item-content">
            <i className="fa fa-th-large sidebar-icon sidebar-icon-lg" />
            <span>Dashboard</span>
            <div className="suffix">
              <div className="badge rounded-pill bg-danger">new</div>
            </div>
          </div>
        </a>
        <a className="sidebar-item">
          <div className="sidebar-item-content">
            <i className="fa fa-sticky-note sidebar-icon" />
            <span>Components</span>
          </div>
        </a>
        <a className="sidebar-item">
          <div className="sidebar-item-content">
            <i className="fa fa-sticky-note sidebar-icon" />
            <span>Bootstrap</span>
          </div>
        </a>
      </div>
      <div className="sidebar-footer">Sidebar Footer</div>
    </div>
  </div>
</div>

      
    </>
  )
}

export default LeftSideBar

