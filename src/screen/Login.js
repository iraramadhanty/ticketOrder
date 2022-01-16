import React from 'react'
import { Image, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../style/index.css'

const Login = () => {
    return (
        <div className='backgroundLogin'>
            <p className='title'>Login</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                <div> <Image src={require('../images/Logo.png')} className='imageLogin' /></div>
                <div className='backgroundtext'>
                    <p style={{ display: 'flex' }}>Email</p>
                    <Form.Control type="email" placeholder="Email" className='placeholder' />
                    <p style={{ display: 'flex', marginTop: 20 }}>Password</p>
                    <Form.Control type="email" placeholder="Password" className='placeholder' />
                    <div className='Login'>
                        <Link className='buttonLogin' to='/regist'>Login</Link>
                        <div style={{ display: 'flex', flex: 'nowrap', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15 }}>
                            <p>Don't have a acount?</p>
                            <Link to='/regist' style={{ fontWeight: 'bold', color: 'black' }}>Register</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
