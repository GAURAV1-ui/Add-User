import React, {useState} from 'react'

import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import App from '../../App';

const AddUser = (props) => {

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler = (event) => {
      event.preventDefault(); 
      if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
        return;
      }
      if(+enteredAge<1){
        return;
      }
      const userList = {
        id : Math.random().toString(),
        name: enteredUserName,
        age: enteredAge 
      }
      props.onAddUser(userList);
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
    <ErrorModal title="An error occured" message="Something went wrong!"/>
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