import React from "react";

function NewCustomer(props){

return (
    <div style={{textAlign:"center"}}>
        <header>
        <h1>New Customer</h1>
        <button onClick={()=>props.handleClick()}>back</button>
        </header>
        <main>
            <div style={{height:"100vh",width:"100%",display:"flex",border:"solid 1px black"}}>
            <form  style={{margin:"auto"}}>
                <label>Name:</label>
                <input type="text" />
                <br/>
                <label>Email:</label>
                <input type="email" />
                <br/>
                <label>Phone:</label>
                <input type="number" />
                <br/>
                <label>Address:</label>
                <input type="text" />
                <br/>
                <label>Address 2:</label>
                <input type="text" />
                <br/>
                <label>City:</label>
                <input type="text" />
                <br/>
                <label>State:</label>
                <input type="text" />
                <br/>
                <label>Zip:</label>
                <input type="number" />
                <br/>


              <button type="submit">Request a Quote</button>
            </form>
            </div>
        </main>
    </div>
)


}


export default NewCustomer;