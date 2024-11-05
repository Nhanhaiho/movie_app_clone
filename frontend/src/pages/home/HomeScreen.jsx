import React from 'react'
import { useAuthStore } from '../../store/authUser'

const HomeScreen = () => {
  const {logout} = useAuthStore()
  useAuthStore()
  return (
    <div>HomeScreen
      <button onClick={logout}>
        Log out
      </button>
    </div>
  )
}

export default HomeScreen