import { PositionOptions } from 'mapbox-gl';
import React, {useContext, useState} from 'react'
import axios from "axios"
import '../../App.css'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';


function SignIn() {

    const { getLoggedIn } = useContext(AuthContext)

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    const {loggedIn} = useContext(AuthContext)

    async function signIn(e){
        e.preventDefault()
        try{
            const logInData = {
                email,
                password,
            }

            await axios.post("http://localhost:1337/auth/login", logInData,{
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
            <h1>SignIn new your Account</h1>
            <form onSubmit={signIn}>
                <input type="email" placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <input type="password" placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn
