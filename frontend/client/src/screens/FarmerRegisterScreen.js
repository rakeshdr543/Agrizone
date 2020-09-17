import React,{useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fregister } from '../actions/UserActions';

function FarmersRegistrationScreen(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const farmerRegister=useSelector(state=>state.farmerRegister);
    const {loading,userInfo,error} =farmerRegister;
 

    const dispatch = useDispatch();
    const redirect=props.location.search? props.location.search.split("=")[1]:'/';
    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
    }, [userInfo])

    const submitHandler=(e)=>{
        e.preventDefault();
     
        dispatch(fregister(name,email,password,rePassword))

        
    }
    return (
        <div className="form">
        <form onSubmit={submitHandler}>

            <ul className="form-container">
                <li>
                    <h2>
                        Join As Farmer
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
                
                
            </ul>
        </form>

        
    </div>
    )
}

export default FarmersRegistrationScreen
