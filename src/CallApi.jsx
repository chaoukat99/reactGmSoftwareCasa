import React, { useState } from 'react'
import axios from 'axios';
function CallApi() {

    const [ipInfo,setIpInfo]=useState(null);
 

    const ConsumeAPi=()=>{
        // v1
    //   fetch("/api")
    //   .then(res=>res.json())
    //   .then(data=>setIpInfo(data))

    axios.get("/api").then((res)=>setIpInfo(res.data))


  axios.get("http://universities.hipolabs.com/search?country=Morocco")
  .then(res=>console.log(res.data));


    }
  return (
    <div>
        <h1 className='text-center'>Call APi </h1>
        <div>
           your Address Ip : {ipInfo==null?"No Ip address":ipInfo.ip}
           <br />
           Country : {ipInfo==null?"None":ipInfo.country_name}
        </div>
        
        <button className='btn btn-success'
        onClick={ConsumeAPi}
        >Show my Address Ip </button>
    </div>
  )
}

export default CallApi