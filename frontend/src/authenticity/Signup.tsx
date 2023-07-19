import { useState } from "react"

export const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
      <label>Email address:</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="length"/>
      <label>Password:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="length"/>

      <button className="button-center">Sign up</button>
    </form>
  )
}