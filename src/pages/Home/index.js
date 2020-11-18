import React,{useState, useEffect} from 'react'

export default function Home() {
  const [employees, setEmployees]=useState([])
  function getEmployees(){
fetch("https://randomuser.me/api/?results=5&nat=us")
    .then (res => res.json())
    .then (data =>{
      console.log(data)
      setEmployees(data.results)
    })
  }
function sortEmployees(){
  let emp = [...employees]
  emp.sort((a,b)=> a.dob.age - b.dob.age)
  setEmployees(emp)

}
  // useEffect(()=> {console.log ("hello")},[employees])
  return (
    <div>
      <button onClick={getEmployees}>Click</button>
      <button onClick={sortEmployees}>Sort by Age</button>
      {employees.length===0
      // ? getEmployees()
      ? <h1>Click For Employees</h1> 
      : <table>
        <th>Image</th>
        <th>Name</th>
        <th>Age</th>
        <th>Phone</th>
        <th>Email</th>
       { employees.map((emp,index)=>(
        <tr key={index}> 
        <img src = {emp.picture.medium}></img>
           <td>{emp.name.first + " " + emp.name.last}</td>
           <td>{emp.dob.age}</td>
           <td>{emp.phone}</td>
           <td>{emp.email}</td>

        </tr>
      ))}
      </table>
     }
    </div>
  )
}
