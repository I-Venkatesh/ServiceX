import { PositionOptions } from 'mapbox-gl';
import React, {useContext, useState} from 'react'
import axios from "axios"
import '../../App.css'
import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

function SignUp() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [drivingLicence, setDrivingLicence] = useState();
    const [password, setPassword] = useState();
    const [passwordVerify, setPasswordVerify] = useState();

    const { getLoggedIn } = useContext(AuthContext)

    const history = useHistory();

    async function signUp(e){
        e.preventDefault()
        try{
            const registerData = {
                name,
                email,
                phoneNumber,
                drivingLicence,
                password,
                passwordVerify
            }

            await axios.post("http://localhost:1337/auth/", registerData,{
                withCredentials: true
            })
            await getLoggedIn()
            history.push("/")   

        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Register a new Account</h1>
            <form onSubmit={signUp}>
                <input type="text" placeholder="Name"
                 onChange={(e) => setName(e.target.value)}
                 value={name}
                />
                <input type="email" placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <input type="number" placeholder="Phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                />
                <input type="text" placeholder="Driving Licence"
                onChange={(e) => setDrivingLicence(e.target.value)}
                value={drivingLicence}
                />
                <input type="password" placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
                <input type="password" placeholder="Verify your password"
                onChange={(e) => setPasswordVerify(e.target.value)}
                value={passwordVerify}
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUp
