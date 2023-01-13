import React, {useState} from 'react'

import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import App from '../../App';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

    const addUserHandler = (event) => {
      event.preventDefault(); 
      if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
          setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
          })
        return;
      }
      if(+enteredAge<1){
        setError({
          title: 'Invalid age',
          message: 'Please enter a valid age (> 0).'
        })
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
    const errorHandler = () =>{
      setError(null);
    };
  return (
    <>
    {error && (
    <ErrorModal 
    title={error.title} 
    message={error.message} 
    onConfirm={errorHandler}
    />
    )}
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
    </>
  );
};

export default AddUser;