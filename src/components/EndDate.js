import React,{useContext} from 'react'
import { TestPageContext } from './TestPage';

const EndDate = (props) => {

    const {start_date_obj,end_date_obj} = useContext(TestPageContext); 
    const [end_date, setEndDate] = end_date_obj;

  return (
    <div>
       <input className="form-control" type="date" value={end_date}/>
    </div>
  )
}

export default EndDate
