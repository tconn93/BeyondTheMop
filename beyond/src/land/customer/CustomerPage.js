import React, {useState,useEffect} from "react";
import CalandarPage from "../cal/CalandarPage";
import "../HomePage.css";
import NewCustomer from "../newcustomer/NewCustomer";


function CustomerPage(props){
const [customer,setCustomer] = useState(undefined);

    useEffect(()=>{
        getCustomerProfile(props.email);
    },[])

    async function getCustomerProfile(email){
        let result =  await fetch('http://localhost:8080/customer/'+email)
        .then(res=>res.json())
       .then(data=>{
        console.log(data)
        return data;
    }).catch(err=>{
        console.log(err);
     return undefined;
    });
        if(result.status === undefined)setCustomer(result);
    }

   

    function handleClick(){
        
        props.setIsBan(true);
    }

if(props.email===undefined || customer===undefined)    
    return <NewCustomer handleClick={()=>handleClick()} />;
else return <CalandarPage setIsBan={(x)=>props.setIsBan(x)} user={customer}/>

}

export default CustomerPage;