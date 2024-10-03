import './UserList.css'


function userList({users, deleteBtn}) {
  return (
    <div className='userList'>
      <div className="userList-container container">
         {users.map((user) => {
            return (
               <div className='card' key={user.id}>
                  <div className="card-inner">
                     <img src={user.imageUrl} alt="img" height={150} width={150}/>
                     <h3 className=''>{user.firstName}, {user.secondName}, {user.age} age</h3>
                     <p>From: {user.from}</p>
                     <p>Job: {user.job}</p>
                     <p>Gender: {user.gender}</p>
                     <button onClick={() => deleteBtn(user.id)}>Delete</button>
                  </div>

               </div>
            )
         })}
      </div>
    </div>
  )
}

export default userList