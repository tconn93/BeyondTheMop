import React, {useEffect, useState} from "react";
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

    useEffect(()=>{
        let x = undefined;
        
        if(state.currentDay.getDay()===0||state.currentDay.getDay()===6 ){
            x = {
            currentDay: DateUtils.getNextWeekkday(state.currentDay),
            dayAsInt: DateUtils.getNextWeekkdayAsInt(state.currentDay)
           }
        }

        if(state.dayAsInt <dayAsInt){
            x = {
            currentDay: DateUtils.getNextWeekkday(today),
            dayAsInt: DateUtils.getNextWeekkdayAsInt(today)
           }
        }

        if(x!== undefined) setState(x);
    },[state]);

    function scheduleDeepClean(){
            console.log('deep clean on '+state.dayAsInt)
    }


    function scheduleBasicClean(){
        console.log('basic clean on '+state.dayAsInt)
    }


   return <div className="page" >
    <div style={{textAlign:"center"}}>
    <h2> Hey {props.user.firstName} {props.user.lastName}! Select a date to book. 
          <button onClick={()=>handleClick()}>back</button></h2>
    </div>
    <div className="calendarGrid">
            
            <div className="calGridItem">

                <Calendar state={state} 
                setState={(x)=>setState(x)} 
                today={DateUtils.getDateAsInt(today)} 
               />
           
            </div>
             


            <div className="calGridItem" style={{alignContent:'center',
                textAlign:'center'}}>

                Book:
            <br/>
                <button onClick={()=>scheduleDeepClean()}>Deep Clean</button>
                <br/>
                <button onClick={()=>scheduleBasicClean()}>Basic Clean</button>
            </div>
    </div>
    </div>
    }



export default CalandarPage;