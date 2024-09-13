import React, {useState} from "react";
import "../HomePage.css";
import './CalandarPage.css';
import Calendar from './Calendar'

function CalandarPage(props){

let today = new Date();

    const [state,setState] = useState({
        currentDay: today,
        dayAsInt: Number.parseInt(''+today.getFullYear()+(today.getMonth()+1<10? '0'+(today.getMonth()+1) : today.getMonth()+1)+(today.getDate()<10? '0'+today.getDate() : today.getDate()),10)
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

                <Calendar state={state} setState={(x)=>setState(x)} />
           
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