import './App.css'
import { useState } from 'react'
// Components
import Header from './components/header/header'
import Footer from './components/footer/footer'
import UserList from './components/userList/userList'
import NewUser from './components/newUser/NewUser'

function App() {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)

  const deleteBtn = (id) => {
    setUsers(prev => {
      return prev.filter(user => {
        return user.id !== id
      })
    })
  }

  const closeModal = (e) => {
    if (e.target.className === 'overlay') setShowModal(false)
    if (e.keyCode === 27) setShowModal(false)
  }

  const addUser = (user) => {
    setUsers(prev => {
      return [...prev, user]
    })
    setShowModal(false)
  }

  return (
    <>
      <div onClick={closeModal} onKeyDown={closeModal} className='App'>
        <Header usersLength={users.length}/>
        <main>
          <div className="no-users">
            {users.length === 0 && <h2>No Users</h2>}
          </div>
          <UserList users={users} deleteBtn={deleteBtn}/>
        </main>
        {showModal && <NewUser addUser={addUser}/>}
        <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
        <Footer/>
      </div>
    </>
  )
}

export default App
