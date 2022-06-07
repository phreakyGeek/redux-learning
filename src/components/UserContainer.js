import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

const UserContainer = ({userData, fetchUsers }) => {
  useEffect((dispatch)=>{
    fetchUsers()
  },[])

  return userData.loading ?
  (<div>Loading</div>)
  : userData.error
  ? (<div>{userData.error}</div>)
  : (<div>
    {
      userData &&
      userData.users &&
      userData.users.map((user)=><p key={user.id}>{user.name}</p>)
    }
    </div>)
}

const mapStateToProps = (state) => {
  return {
    userData: state.user // name defined in rootReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)