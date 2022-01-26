import { useState } from 'react'
import './App.css';
import validator from 'validator'

function App() {

  const [sigupInput, setSignInput] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleChange = (event) => {
    setSignInput({
      ...sigupInput, [event.target.name]: event.target.value
    })
  }
  const handleClick = (event) => {
    event.preventDefault()
    if (!validator.isEmail(sigupInput.email)) {
      return setError('The email you input is invalid')
    }
  }
  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor='email'>
            Email adress
          </label>
          <input type='email' id='email' name='email' value={sigupInput.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='password'>
            Password
          </label>
          <input type='password' id='password' name='password' value={sigupInput.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='confirmPassword'>
            Confirm password
          </label>
          <input type='password' id='confirmPassword' name='confirmPassword' value={sigupInput.confirmPassword} onChange={handleChange} />
        </div>
        {error && <p>{error}</p>}
        <button type='submit' onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
