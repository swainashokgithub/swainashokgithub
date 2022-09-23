import { useState } from "react";


function App() {
  const [form,setForm]=useState({
    amount:"0",
    details:"",
    date:""
  })
function handleChange(e){
  const {name,value}=e.target;
  setForm({...form,[name]:value})
}

async function handleSubmit(e){
  e.preventDefault();
  //console.log(form)
  const res =await fetch("http://localhost:4000/transactions",{
    method:"POST",
    body: form,
  });
  console.log(res)
}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter Amount" name="amount" value={form.amount} onChange={handleChange}/>
        <input type="text" placeholder="Enter Description" name="details" value={form.details} onChange={handleChange}/>
        <input type="date" name="date" value={form.date} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
