import React,{useContext} from 'react'
import { TestPageContext } from './TestPage';

const StartDate = (props) => {
    console.log(props);
    const {start_date_obj} = useContext(TestPageContext); 
    const [start_date, setStartDate] = start_date_obj;
  
  return (
    <div>
      <input className="form-control" onChange={(e)=>setStartDate(e.target.value)} type="date" value={start_date}/>
    </div>
  )
}

export default StartDate
