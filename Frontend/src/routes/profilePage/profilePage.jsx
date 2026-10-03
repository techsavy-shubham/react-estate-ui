import './profilePage.scss'
import List from '../../Components/List/List'
import Chat from '../../Components/Chat/chat'

function ProfilePage(){
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
        <div className="title">
          <h1>User Information</h1>
          <button>Update Profile</button>
        </div>
        <div className="info">
          <span>Avatar : <img src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png' alt=''/></span>
          <span>Username : <b>John Doe</b></span>
          <span>E-mail : john@gmail.com</span>
        </div>
        <div className="title">
          <h1>My List</h1>
          <button >Create New Post</button>
        </div>
        <List />
        <div className="title">
          <h1>Saved List</h1>
        </div>
        <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage 