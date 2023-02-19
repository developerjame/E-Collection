import React, {useState} from "react";
import './Form.css';
import { Login } from "./Login";
import { Register } from './Register';

function SignUp() {
  const [currentForm, setCurrentForm] = useState('register');
  const toggleForm = (forName) =>{
    setCurrentForm(forName);
  }
  return (
    <div className="App">
      {
        currentForm === "register" ? <Register onFormSwitch={toggleForm}/>:<Login onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default SignUp;
