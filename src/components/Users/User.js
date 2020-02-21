import React from 'react'


const User = ({ user:{name, email, address:{street, city}}}) => (
    <div className="card">
        <h1>{name}</h1>
        <span>{email}, {city}, {street}</span>
    </div>
)

export default User 