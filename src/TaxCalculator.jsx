import { useState } from "react"

function TaxCalculator() {


    const [amount,setAmount]=useState("");
    const [tax,setTax]=useState("");
    const [TTC,setTTC]=useState("");


const calculation=()=>{
    if(amount && tax){

       setTTC(+(amount)+(amount*(tax/100)))    
    }else{
        alert("Sorry Invalid Value")
    }
}
  return (
    <div className="card" style={{width:700}}>
        <h1 className="text-center">Tax Calculator</h1>
        <div className="row">
            <div className="col-8">
              <input type="number" onChange={(ev)=>setAmount(ev.target.value)} className="form-control" name="amount" id="" />
            </div>
            <div className="col-4">
              <input type="number" onChange={(ev)=>setTax(ev.target.value)}  className="form-control" name="tax" id="" />
            </div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
            <button className="btn btn-info" onClick={()=>calculation()} style={{width:"50%"}}>Calculate</button>

        </div>



        <div>
            <div className="card" style={{ width: "18rem" }}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">HT AMOUNT :{amount} </li>
    <li className="list-group-item">TAX :{tax} </li>
    <li className="list-group-item">MONTANT TTC : {TTC} </li>
  </ul>
</div>

        </div>
    </div>
  )
}

export default TaxCalculator