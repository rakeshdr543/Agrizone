import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { register } from '../actions/UserActions';

const RegisterScreen=(props)=> {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const userRegister=useSelector(state=>state.userRegister);
    const {loading,userInfo,error} =userRegister;
 

    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/");
        }
    }, [userInfo])

    const submitHandler=(e)=>{
        e.preventDefault();
     
        dispatch(register(name,email,password,rePassword))

        
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>

                <ul className="form-container">
                    <li>
                        <h2>
                            Create Account
                        </h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="name" name="name"  onChange={e=>setName(e.target.value)}>

                        </input>
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email"  onChange={e=>setEmail(e.target.value)}>

                        </input>
                    </li>
                    <li>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" onChange={e=>setPassword(e.target.value)}>

                        </input>
                    </li>
                    <li>
                        <label htmlFor="repassword">
                            Reenter the password
                        </label>
                        <input type="rePassword" name="rePassword" onChange={e=>setRePassword(e.target.value)}>

                        </input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Register</button>
                    </li>
                    <li>
                        Already have an Account? <Link to="/signin">Sign-in</Link>

                    </li>
                    
                </ul>
            </form>

            
        </div>
    )
}

export default RegisterScreen;
