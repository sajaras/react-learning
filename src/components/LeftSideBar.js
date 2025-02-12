import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
const LeftSideBar = () => {
  return (
    <>
<Sidebar>
  <Menu>
    {/* <SubMenu label="Charts">
      
      <MenuItem> Line charts </MenuItem>
    </SubMenu> */}
    <Link to="/books"><MenuItem> Books </MenuItem></Link>
    <Link to="/contacts"><MenuItem> Contacts </MenuItem></Link>
    <Link to="/states"><MenuItem> States </MenuItem></Link>
   
  </Menu>
</Sidebar>

      
    </>
  )
}

export default LeftSideBar

