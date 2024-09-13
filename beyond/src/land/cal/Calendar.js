import React from "react";
import CalendarDays from "./CalendarDays";
import "./calendar.css";
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
                dayAsInt:Number.parseInt(''+day.year+(day.month+1<10? '0'+(day.month+1) : day.month+1)+(day.number<10? '0'+day.number : day.number),10)
            };
            props.setState(x);
        }
         
        
  
    }

    let last =  new Date(props.state.currentDay.getFullYear(), props.state.currentDay.getMonth()-1, props.state.currentDay.getDate());
    let next = new Date(props.state.currentDay.getFullYear(), props.state.currentDay.getMonth()+1, props.state.currentDay.getDate());
    return (    <div className="calendar" style={{textAlign:"center"}}>
        <div className="calendar-header" style={{textAlign:"center", border:"solid 10px black"}}>
            <span style={{textAlign:"center", border:"solid 4px red"}}>
        <button 
        onClick={()=>{props.setState(
            {currentDay:last, 
            dayAsInt: Number.parseInt(''+last.getFullYear()+(last.getMonth()+1<10?
            '0'+last.getMonth():last.getMonth())+(last.getDate()<10?'0'+last.getDate():last.getDate()),10)})}} 
        >Previous Month</button>
        <h2 >{months[props.state.currentDay.getMonth()]}  {props.state.currentDay.getFullYear()}</h2>  
        <button oonClick={()=>{props.setState(
            {currentDay:next, 
            dayAsInt: Number.parseInt(''+next.getFullYear()+(next.getMonth()+1<10?
            '0'+next.getMonth():next.getMonth())+(next.getDate()<10?'0'+next.getDate():next.getDate()),10)})}} 
        >Next Month</button>
        </span>
        </div>
        <div className="calendar-body">
            <div className="table-header">
            {weekdays.map((weekday)=>{
                return <div key={weekday} className="weekday"><p>{weekday}</p></div>
            })}
            </div>
            <CalendarDays day={props.state} changeCurrentDay={(day)=>changeCurrentDay(day)}/>
        </div>  
    </div>)


}

export default Calendar;