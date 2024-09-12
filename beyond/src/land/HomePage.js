import React, {useState} from "react";
import BannerPage from "./banner/BannerPage";
import CalandarPage from "./cal/CalandarPage";
import CustomerPage from "./customer/CustomerPage";
function HomePage() {

const [isBan,setIsBan] = useState(true);
const [email,setEmail] = useState(undefined)


// return <CustomerPage email='tyler@gmail.com'/>

if(isBan) return <BannerPage setIsBan={(x)=>setIsBan(x)} setEmail={(x)=>setEmail(x)}/>
else return <CustomerPage setIsBan={(x)=>setIsBan(x)} email={email}/>
 ; 
}
export default HomePage;