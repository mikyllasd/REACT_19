import { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Email: ", email)
        console.log("Password: ",password)
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <label htmlFor="email">Email: </label>
                <input type="email"
                value={email}
                onChange={(e)=> setEmail (e.target.value)} />
                <br></br>
                <label htmlFor="password">Password: </label>
                <input type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}