import React from 'react'

const GetDataButton = (props) => {
//    const fetchBooks = (props)=> {
//     alert("clicked");
    
//         props.setBooks([{id:1,name:'JK Rowling'}]);
//    }
  return (
    <div>
      <button type="button" onClick={()=>props.clickHandler()}>Get Data</button>
    </div>
  )
}

export default GetDataButton
