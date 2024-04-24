
import React from 'react'
import './Form.css'
function Form1() {
  return (
      <> 
      <div className='log'>

      <form>
        <h1>  Log In Form</h1>
      <div className='email'>
      <label>Email-Id:</label>
      <input type='text'></input>
      </div>

      <div className='id'>
<label>Password:</label>
<input type='Password'></input>
      </div>
      <button>LOG In </button>
</form>
      </div>
</>
)
}
export default Form1;



