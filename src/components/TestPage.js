import React,{ useState,createContext } from 'react'
import StartDate from './StartDate'
import EndDate from './EndDate';
import GetDataButton from './GetDataButton';
import Table from './Table';
import { fetchBooks } from '../api';
export const TestPageContext = createContext();
const TestPage = () => {
    const [start_date, setStartDate] = useState('2024-01-01');
    const [end_date, setEndDate] = useState('2024-01-01');
    const [books, setBooks] = useState([]);
    
    // const getBooks = (start_date,end_date)=> {
        
        
    //     setBooks(fetchBooks(start_date,end_date));
    // }
  return (
    <TestPageContext.Provider value={{ start_date_obj: [start_date, setStartDate], end_date_obj: [end_date, setEndDate],books_obj:[books,setBooks] }}>
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">
                <StartDate></StartDate>
                
                
            </div>
            <div className="col-3">
            <EndDate></EndDate>
            </div>
            <div className="col-3">
            <GetDataButton clickHandler={()=> setBooks(fetchBooks(start_date,end_date))}  ></GetDataButton>
            </div>
        </div>

        <div className="row">

            <Table ></Table>
        </div>
      

    </div>
    </TestPageContext.Provider>
  )
}

export default TestPage
