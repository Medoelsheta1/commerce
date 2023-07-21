import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
    const user = useSelector(state => state.cart.userData)
    console.log(user)
    return (
        <div className='profile '>
            
            <div className='container'>
                <h3 className='text-start text-primary mb-4'>Hello {user.username}</h3>
                <div className='profile-content d-flex flex-column align-items-start'>
                    <div className='info d-flex justify-content-center align-items-center mb-4'>
                        <h4 className='text-primary'> Your Name:&nbsp;</h4>
                        <h4>{user.username}</h4>
                    </div>
                    <div className='info d-flex justify-content-center align-items-center mb-4'>
                        <h4 className='text-primary'>Your email:&nbsp;</h4>
                        <h4>{user.email}</h4>
                    </div>
                    <div className='info d-flex justify-content-center align-items-center mb-4'>
                        <h4 className='text-primary'>Confirmed:&nbsp;</h4>
                        <h4>{user.confirmed ? 'true' : 'false'}</h4>
                    </div>
                    <div className='info d-flex justify-content-center align-items-center mb-4'>
                        <h4 className='text-primary'>Privilage:&nbsp;</h4>
                        <h4>User</h4>
                    </div>
                </div>
            </div>
                

        </div>
    )
}

export default Profile