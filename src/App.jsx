import './App.css'
import { useState } from 'react'
// Components
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  const [users, setUsers] = useState([])
  console.log(users.length);
  return (
    <>
      <div className='App'>
        <Header usersLength={users.length}/>
        <main>
          <div className="no-users">
            {users.length === 0 && <h2>No Users</h2>}
          </div>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
