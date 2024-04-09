import React, { useState } from 'react'


const ContactUs = () => {
const [name,setName]=useState("");
const[email,setEmail]=useState("");
const[number,setNumber]=useState("")
const [description,setDescription]=useState("")

const submitHandler=(event)=>{
    event.preventDefault();
    setName("")
    setEmail("")
    setNumber("")
    setDescription("")
}

const fetchDataHandler=async()=>{
    const response=await fetch("https://ecommerce-db185-default-rtdb.firebaseio.com/complaint.json")
    const data= await response.json();
    console.log(data)
}

const userData={
    name:name,
    email:email,
    number:number,
    description:description
}

const userDetail= async()=>{
   
    const response=await fetch(
        "https://ecommerce-db185-default-rtdb.firebaseio.com/complaint.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response, "OK");
    const data = await response.json();
    if(response.status ===200){
         fetchDataHandler()
    }
   
    console.log(data);
    // if (response.status === 200) {
    //   fetchMoviesHandler();
    // }
    

}

  return (
    <div style={{marginTop:'80px'}}>
     
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
                <label>E-mail</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <label>Contact Number</label>
                <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}></input><br/>
                <label>Description</label>
                <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}></input><br/>
                <button type='submit' onClick={()=>userDetail()}>Submit</button>
            </form>
       
    </div>
  )
}

export default ContactUs;