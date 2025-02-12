import React,{useContext} from 'react'
import { StartDateContext } from './BooksPage';

const CommonStartDate = () => {
    const {start_date_obj} = useContext(StartDateContext); 
    const [start_date, setStartDate] = start_date_obj;
  
  return (
    <div>
        <input className="form-control" onChange={(e)=>setStartDate(e.target.value)} type="date" value={start_date}/>
    </div>
  )
}

export default CommonStartDate
