
import { useState } from "react"
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";


export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    // const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
    // console.log(token)

    const handleLogin = (e) => {  
        e.preventDefault();
        login(dispatch, {username , password})
    }
 
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <input 
                style={{ padding: 10, marginBottom: 20 }}
                type='text'
                placeholder="Username" 
                onChange={(e)=> setUsername(e.target.value)}    
            />
            <input
                style={{ padding: 10, marginBottom: 20 }}
                type='password'
                placeholder="Password" 
                onChange={(e)=> setPassword(e.target.value)}  
            />
            <button
                style={{ padding: '10px 15px'}}
                onClick={handleLogin}>Login</button>
        </div>
    )
}