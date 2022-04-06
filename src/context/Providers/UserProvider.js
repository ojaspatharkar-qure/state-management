import { useState } from 'react'
import Contexts from '../Contexts'

const { UserContext } = Contexts

const UserProvider = (props) => {
    const { children } = props
    const [userDetails, setUserDetailsVal] = useState({ name: '' })

    const setUserDetails = (usrDtl) => {
        setUserDetailsVal({ ...usrDtl })
    }

    return (
        <UserContext.Provider value={{ userDetails, setUserDetails }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider