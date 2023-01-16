import React, {useState} from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userList) => {
    console.log(userList);
    setUsersList((prevUserList) => {
      return [...prevUserList,userList]
    })
  }
  return (
    <div>
       <AddUser onAddUser = {addUserHandler}/>
     <UsersList users = {usersList}/>
    </div>
  );
};

export default App;
