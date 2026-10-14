import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
const [email , setEmail]= useState("");
const [password , setPassword]= useState("");
const [message , setMessage]= useState("");

const navigate = useNavigate();

const handleLogin = (e) => {
    e.preventDefault();
    if(email === "subu@001" && password === "1234"){
        setMessage("login success");
        navigate("/home");
        
    }else{
        setMessage("login failed");
    }
}
  return (
    <div>
<h2>login</h2>

<form onSubmit={handleLogin}>
<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
< input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/><br/>
<br></br>
<button type="submit">login</button>
<p>{message}</p>
</form>

    </div>
  )
}

export default Login