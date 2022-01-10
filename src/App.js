import React, { useState } from "react";
import AddUser from "./components/NewUser/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  console.log(userList);

  const addToListHandler = (enteredUser) => {
    setUserList((prevUserList) => {
      return { enteredUser, ...userList };
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addToListHandler} />
      <UserList items={userList} />
    </div>
  );
}

export default App;
