import React, { useState } from 'react'
import { AuthContext } from '../context/AuthContext'


// const user = {
//     id: 2,
//     name: 'Lucas Monti',
//     email: 'lucas@google.com'
// }

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState('login')
    
console.log(children)
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {children}
    </AuthContext.Provider>
  )
}