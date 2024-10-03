// styles
import './NewUser.css'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function NewUser({addUser}) {
   const [user, setUser] = useState({
      id: uuid(),
      imageUrl: '',
      firstName: '',
      secondName: '',
      age: null,
      from: '',
      job: '',
      gender: '',
   })

   const handleSubmit = (e) => {
      e.preventDefault()
      addUser(user);
   }

  return (
    <div  className='modal-wrapper'>
      <div className="overlay">
         <div className="modal">
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit}>
               <label>
                  <span>Img URL: </span>
                  <input onChange={(e) => setUser((prev) => {
                     return {...prev, imageUrl: e.target.value}
                  })} type="url"/>
               </label>
               <label>
                  <span>First Name: </span>
                  <input onChange={(e) => setUser((prev) => {
                     return {...prev, firstName: e.target.value}
                  })} type="text" required/>
               </label>
               <label>
                  <span>Last Name: </span>
                  <input onChange={(e) => setUser((prev) => {
                     return {...prev, secondName: e.target.value}
                  })} type="text" required/>
               </label>
               <label>
                  <span>Age: </span>
                  <input onChange={(e) => setUser((prev) => {
                     return {...prev, age: e.target.value}
                  })} type="number" required/>
               </label>
               <label>
                  <span>From: </span>
                  <input onChange={(e) => setUser((prev) => {
                     return {...prev, from: e.target.value}
                  })} type="text" required/>
               </label>
               <label>
                  <span>Job: </span>
                  <input onChange={(e) => setUser((prev) => {
                     return {...prev, job: e.target.value}
                  })} type="text" required/>
               </label>

               <div className='gender'>
                  <span>Your Gender: </span>
                  <label>
                     <small>Male</small>
                     <input onChange={(e) => setUser((prev) => {
                     return {...prev, gender: e.target.value}
                  })} type="radio" name='gender' required value="male"/>
                  </label>
                  <label>
                     <small>Female</small>
                     <input onChange={(e) => setUser((prev) => {
                     return {...prev, gender: e.target.value}
                  })} type="radio" name='gender' value="female"/>
                  </label>
               </div>
               <button className='modal-btn'>Submit</button>
            </form>
         </div>
      </div>
    </div>
  )
}

export default NewUser