import { useState } from 'react'
import './App.css';
import validator from 'validator'

function App() {

  const [signupInput, setSignInput] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleChange = (event) => {
    setSignInput({
      ...signupInput, [event.target.name]: event.target.value
    })
  }
  const handleClick = (event) => {
    event.preventDefault()
    if (!validator.isEmail(signupInput.email)) {
      return setError('the email you input is invalid')
    }
    else if (signupInput.password.length < 5) {
      return setError('the  password shoud have 5 or more characteres')
    }
    else if (signupInput.password !== signupInput.confirmPassword) {
      return setError("the passwords don't match. Try again")
    }
  }
  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor='email'>
            Email adress
          </label>
          <input type='email' id='email' name='email' value={signupInput.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='password'>
            Password
          </label>
          <input type='password' id='password' name='password' value={signupInput.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='confirmPassword'>
            Confirm password
          </label>
          <input type='password' id='confirmPassword' name='confirmPassword' value={signupInput.confirmPassword} onChange={handleChange} />
        </div>
        {error && <p>{error}</p>}
        <button type='submit' onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}
export default App;
