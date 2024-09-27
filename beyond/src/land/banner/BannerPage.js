import React, { useState } from "react";
import "../HomePage.css";
import cheetah from '../../media/cheetah.jpg';
import logo from '../../media/logo.jpg';

function BannerPage(props){

const [text, setText] = useState('tyler@gmail.com'); 

    function handleClick(){
        console.log("clicked Here 1.")
        props.setEmail(text);
        props.setIsBan(false);
    }


    return(
        <div className="page" >
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Style+Script&display=swap" rel="stylesheet"></link>
        
        <div className="banner" style={{height: '100px'}}>
          <h1 className="title style-script-regular">Cleaning and Organizing the Gulf Coast</h1>
        </div>
        
        <div className="home-page">
        <div className="open-grids ">
            <img className="cheetah" src={cheetah} alt="cheetah" />
        </div>
        <div>
        <img width="500 px" src={logo} alt="Avatar" />
        <div style={{textAlign: 'center',backgroundColor:'black'}}>
            <form onSubmit={()=>handleClick()}>
            <input id="clientEmail" type="text" defaultValue={text} onChange={(e)=>setText(e.target.value)}/>
            <div value={"Book now"} onClick={()=>handleClick()}> <h1 className="title style-script-regular" style={{color:"white"}}>Book Now</h1></div>
            </form >
        </div>
        </div>
        <div className="open-grids ">
        <img className="cheetah" src={cheetah} alt="cheetah" />
        </div>
       
      </div>
    </div>
    )
}

export default BannerPage;