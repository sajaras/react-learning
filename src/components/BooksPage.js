import React,{useState,createContext} from 'react'
import { getCurrentDate } from '../commonfunctions';
import CommonStartDate from './CommonStartDate';
export const StartDateContext = createContext();
const BooksPage = () => {
    const [start_date,setStartDate] = useState(getCurrentDate())
    const [start_date2,setStartDate2] = useState('2027-04-01')
  
    
  return (
    <div>
      <StartDateContext.Provider value={{start_date_obj:[start_date,setStartDate]}}>
        <CommonStartDate></CommonStartDate>
        <StartDateContext.Provider value={{start_date_obj:[start_date2,setStartDate2]}}>
        <CommonStartDate></CommonStartDate>
        </StartDateContext.Provider>
        </StartDateContext.Provider>
      
       
       
    </div>
  )
}

export default BooksPage
