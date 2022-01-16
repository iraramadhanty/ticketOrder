import React from 'react'
import { Image, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../style/index.css'

const Regist = () => {
    return (
        <div className='backgroundLogin'>
            <p className='title'>Register</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                <div> <Image src={require('../images/Logo.png')} className='imageLogin' /></div>
                <div className='backgroundtext'>
                    <p style={{ display: 'flex' }}>Full Name</p>
                    <Form.Control type="Full Name" placeholder="Full Name" className='placeholder' />
                    <p style={{ display: 'flex', marginTop: 20 }}>Email</p>
                    <Form.Control type="email" placeholder="Email" className='placeholder' />
                    <p style={{ display: 'flex', marginTop: 20 }}>Password</p>
                    <Form.Control type="email" placeholder="Password" className='placeholder' />
                    <div style={{ marginTop: 5 }}>
                        <Link className='buttonRegist' to='/'>Register</Link>
                        <div style={{ display: 'flex', flex: 'nowrap', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5 }}>
                            <p>Do have a acount?</p>
                            <Link to='/' style={{ fontWeight: 'bold', color: 'black' }}>Login</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Regist
