import React from 'react'
import useRequest from '../../hooks/useRequest'

import User from './User'

const Users = () => { 

const users = useRequest('users')

return (
    <>      
    {
        users.map(user => <User key={user.id} user={user} />)
    }
    </>
    )
}
export default Users