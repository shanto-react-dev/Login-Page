import React, { useState } from 'react'
// ---------- CSS Imports
import '../Login/Login.css'
// ---------- Link From React-Router-Dom
import { Link } from 'react-router-dom'
// ---------- React Icons
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
// ---------- React Spinner
import { FadeLoader } from 'react-spinners';


const Login = () => {

    const [show , setShow] = useState(false)
    const [formData , setFormData] = useState({ username: '' , password: '' })
    const [error , setError] = useState({ usernameError: '' , passwordError: '' })
    const [loading , setLoading] = useState(true)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!formData.username){
            setError((prev)=>({...prev , usernameError: 'Enter Your Username'}))
        }
        if(!formData.password){
            setError((prev)=>({...prev , passwordError: 'Enter Your Password'}))
        }else{
            console.log('dhsadsa')
        }
    }

    console.log(formData)
  return (
    <>
        {/*========== Login Start ==========*/}
            <section className="login">
                <div className="container">
                    <div className="login-area">
                        <div className="login-part">
                            <div className="login-text">
                                <h3>WELCOME BACK!</h3>
                                <p>Don’t have an account, <Link to={'/'}>Sign up</Link></p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="login-input">
                                    <div className="login-input-1">
                                        <p>Username</p>
                                        <input onChange={(e)=>{setFormData((prev)=>({...prev , username: e.target.value})) ; setError((prev)=>({...prev , usernameError: ''}))}} type="text" placeholder='Enter Your Username'/>
                                        <p className='red'>{error.usernameError}</p>
                                    </div>
                                    <div className="login-input-2">
                                        <p>Password</p>
                                        <div className="login-icon">
                                            {
                                                show?
                                                <FaEye onClick={()=>setShow(!show)} className='icon'/>
                                                :
                                                <FaEyeSlash onClick={()=>setShow(!show)} className='icon'/>
                                            }
                                        </div>
                                        <input type={show? 'text' : 'password'} onChange={(e)=> {setFormData((prev)=>({...prev , password: e.target.value})) ; setError((prev)=>({...prev , passwordError: ''}))}} placeholder='Enter Your Password'/>
                                        <p className='red'>{error.passwordError}</p>
                                    </div>
                                    <div className="login-forget-password">
                                        <Link to={'/'}>Forget password?</Link>
                                    </div>
                                </div>
                                <div className="login-button">
                                    {
                                        loading?
                                        <button to={'/'} className='button'>Sign In</button>
                                        :
                                        <button to={'/'} className='button'><FadeLoader /></button>
                                    }
                                </div>
                            </form>
                            <div className="login-text-2">
                                <div className="line-1"></div>
                                <p>or continue with</p>
                                <div className="line-2"></div>
                            </div>
                            <div className="login-icons">
                                <div className="icons">
                                    <img src="../public/google.png" alt="icons" />
                                </div>
                                <div className="icons">
                                    <img src="../public/facebook.png" alt="icons" />
                                </div>
                                <div className="icons">
                                    <img src="../public/apple.png" alt="icons" />
                                </div>
                            </div>
                        </div>
                        <div className="login-img">
                            <img src="../public/Image.png" alt="login img" />
                        </div>
                    </div>
                </div>
            </section>
        {/*========== Login End ==========*/}
    </>
  )
}

export default Login