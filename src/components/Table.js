import React,{useContext} from 'react'
import { TestPageContext } from './TestPage';

const Table = (props) => {

    const {books_obj} = useContext(TestPageContext);
    const [books,setBooks] = books_obj;
    const booklist = books.map(book =>  (
    <tr key={book.id}>
        <td>{book.id}</td>
    <td>{book.name}</td>
    </tr>
));
    
    
  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
     
    </tr>
  </thead>
  <tbody>
    {booklist}
  </tbody>
</table>
    </div>
  )
}

export default Table
