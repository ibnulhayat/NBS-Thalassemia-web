import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import * as AllService from './../AllService'
import { useNavigate } from 'react-router-dom';
import * as Store from './../Storage'



export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("shahariar.dmc@gmail.com"); // 
    const [password, setPassword] = useState("104403"); //
    const [error, setError] = useState("");
    const [disable, setDisable] = useState(false)

    useEffect(()=> {
        const loginData = Store.getLocalStorageData('loginData')
        if(loginData?.accessToken) navigate('/dashboard')
    })

    const handleValidation = (event) => {
        let formIsValid = true;
        const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!email.match(reg)) {
            formIsValid = false;
            setError("Email Not Valid");
            return false;
        } else {
            setError("");
            formIsValid = true;
        }
    
        if (!password.match(/^[a-zA-Z0-9]{6,22}$/)) {
            formIsValid = false;
            setError( "Only Letters and length must best min 6 Chracters and Max 22 Chracters")
            return false;
        } else {
            setError("");
            formIsValid = true;
        }
    
        return formIsValid;
    };
    
    const loginSubmit = async(e) => {
        e.preventDefault();
        const formValidation = handleValidation();
        if(formValidation){
            setDisable(true)
            const response =  await AllService.checkLogin(email, password)
            if(response){
                setDisable(false)
                navigate('/dashboard')
            }
        }
    };


    return (
        <div className="container">
            <h1 className="login_title">LOGIN PANAL</h1>
            <div className="login_card">
                <form id="loginform" onSubmit={loginSubmit} className="login_form">
                    <input
                        className='login_input'
                        type="email"
                        placeholder="Username"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        className='login_input'
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {
                        error?
                            <small className="text-danger form-text"> {error} </small>
                        : null
                    }
                    <button 
                        type="submit" 
                        // className="login-button"
                        className={disable? 'login-button-dis': 'login-button'}
                        disabled={disable}
                        >Submit</button>
                </form>
            </div>
        </div>
    );
}