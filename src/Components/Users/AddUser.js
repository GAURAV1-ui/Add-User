import React, {useState} from 'react'

import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
const AddUser = (props) => {

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler = (event) => { 
      if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
        return;
      }
      if(+enteredAge<1){
        return;
      }
        event.preventDefault();
      console.log(enteredUserName,enteredAge);
      setEnteredUserName('');
      setEnteredAge('');
    };

    const userChangeHandler = (event) =>{
      setEnteredUserName(event.target.value)
    }
    const ageChangeHandler = (event) =>{
      setEnteredAge(event.target.value)
    }
  return (
    <Card className = {classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>
          Username
          </label>

        <input id="username" 
        type="text" 
        value={enteredUserName} 
        onChange={userChangeHandler}>

        </input>

        <label htmlFor='age'>
          Age
          </label>

        <input id="age" 
        type="number" 
        value={enteredAge} 
        onChange={ageChangeHandler}>

        </input>
        <Button type='submit'>
          Add User
          </Button>
      </form>
    </Card>
  );
};

export default AddUser;