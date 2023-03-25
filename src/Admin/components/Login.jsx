import React from 'react';
import { emailValidator, passwordValidator } from '../regexValidator';
import {useNavigate} from "react-router-dom"
import './Login.css'

const Login = () => {
    const history = useNavigate()

    const [input, setInput] = React.useState({ email: '', password: '' });

    const [errorMessage, seterrorMessage] = React.useState('');
    const [successMessage, setsuccessMessage] = React.useState('');

    const handleChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    // React.useEffect(()=>{
    //  if(localStorage.getItem('auth')) history('/main')
    // })

    const formSubmitter = e => {
        e.preventDefault();
        setsuccessMessage('');
        if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');

        if (!passwordValidator(input.password))
            return seterrorMessage(
                'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
            );
        // setsuccessMessage('Successfully Validated');
        if(input.email !== 'admin@gmail.com' || input.password !== 'Admin@123') return seterrorMessage('Invalid email or password');

        history('/admin/main')
        localStorage.setItem('auth', true)

    };

    return (
        
                        <form className="login100-form validate-form" onSubmit={formSubmitter}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <center>
                            <div className="heading">Login</div></center>
                            <center>
                            {errorMessage.length > 0 && <div style={{  fontSize:'30px' , marginTop: '50px' , marginBottom: '50px', color: 'red' }}>{errorMessage}</div>}
                            {successMessage.length > 0 && (
                                <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
                            )}</center>
                            <div className="data" data-validate="email is required">
                                <div className="data">Email</div>
                                <input
                                    className="input100"
                                    type="text"
                                    name="email"
                                    placeholder="Type your Admin Id"
                                    onChange={handleChange}
                                />
                                <span className="focus-input100" data-symbol="" />
                            </div>
                            <div className="data" data-validate="Password is required">
                                <div className="data">Password</div>
                                <input
                                    className="input50"
                                    type="password"
                                    name="password"
                                    placeholder="Type your password"
                                    onChange={handleChange}
                                />
                                <span className="focus-input100" data-symbol="" />
                            </div>
                            
                           
                                <div className="login">
                                    <button className="login100-form-btn" style ={{fontSize:'30px',color:'#50D050',border:'30'}}>Login</button>
                                </div>
                           
                            
                        </form>
                  
             
    );
};

export default Login;
