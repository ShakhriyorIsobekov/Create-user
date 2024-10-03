// style
import './Header.css'


function header({usersLength}) {
  return (
    <div className='navbar'>
      <div className="navbar-container container">
        <h1 className="navbar-logo">CUser</h1>
        <h3 className="navbar-counter">
          {usersLength > 0 ? usersLength + " Users :)" : "No users yet :("}
        </h3>
      </div>
    </div>
  )
}

export default header