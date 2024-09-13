import React, {useState} from "react";
import "../HomePage.css";
import './CalandarPage.css';
import Calendar from './Calendar'
import DateUtils from "../../utils/DateUtils";

function CalandarPage(props){

let today = new Date();

let day = DateUtils.getNextWeekkday(today);
let dayAsInt = DateUtils.getNextWeekkdayAsInt(today);
console.log(dayAsInt);

    const [state,setState] = useState({
        currentDay: day,
        dayAsInt: dayAsInt
    });
    function handleClick(){
        props.setIsBan(true);
    }


    // function scheduleDeepClean(){

    // }


    // function scheduleBasicClean(){

    // }


   return <div className="page" >
    <div style={{textAlign:"center"}}>
    <h2> Howdy {props.user.firstName} {props.user.lastName}!  
          <button onClick={()=>handleClick()}>back</button></h2>
    </div>
    <div className="calendarGrid">
            <div className="calGridItem" style={{alignContent:'center',
                textAlign:'center'}}>

                select
                <br/>
                A
                <br/>
                Date
                <br/>
                to 
                <br/>
                Book
            </div>
            <div className="calGridItem">

                <Calendar state={state} 
                setState={(x)=>setState(x)} 
                today={dayAsInt} 
               />
           
            </div>
             


            <div className="calGridItem" style={{alignContent:'center',
                textAlign:'center'}}>

                Book:
            <br/>
                <button >Deep Clean</button>
                <br/>
                <button >Basic Clean</button>
            </div>
    </div>
    </div>
    }



export default CalandarPage;