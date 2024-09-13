import React from "react";
import CalendarDays from "./CalendarDays";
import "./calendar.css";
import DateUtils from "../../utils/DateUtils";
function Calendar(props){

    const weekdays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];;


    function changeCurrentDay(day){
        if(day.past || day.busy || day.weekend ){
                console.log("no go")
        }else{
            console.log("success")
            let x = {
                currentDay:day.date,
                dayAsInt: DateUtils.getDateAsInt(day.date)
            };
            props.setState(x);
        }
         
        
  
    }
    let canGoBack = props.today > props.state.dayAsInt;

    let last =  new Date(props.state.currentDay.getFullYear(), props.state.currentDay.getMonth()-1, props.state.currentDay.getDate());
    let next = new Date(props.state.currentDay.getFullYear(), props.state.currentDay.getMonth()+1, props.state.currentDay.getDate());
    return (    <div className="calendar" style={{textAlign:"center"}}>
        <div className="calendar-header" style={{textAlign:"center", border:"solid 10px black"}}>
            <span style={{textAlign:"center", border:"solid 4px red"}}>
        <button 
        onClick={()=>{props.setState(
            {currentDay:last, 
            dayAsInt: DateUtils.getDateAsInt(last)})}} 
        >Previous Month</button>

        
        <h2 >{months[props.state.currentDay.getMonth()]}  {props.state.currentDay.getFullYear()}</h2>  
        <button onClick={()=>{props.setState(
            {currentDay:next, 
            dayAsInt: DateUtils.getDateAsInt(next)})}} 
        >Next Month</button>
        </span>
        {props.state.dayAsInt}
        </div>
        <div className="calendar-body">
            <div className="table-header">
            {weekdays.map((weekday)=>{
                return <div key={weekday} className="weekday"><p>{weekday}</p></div>
            })}
            </div>
            <CalendarDays day={props.state} changeCurrentDay={(day)=>changeCurrentDay(day)} today={props.today}/>
        </div>  
    </div>)


}

export default Calendar;