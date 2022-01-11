import React, { useState } from "react";
import AddUser from "./components/NewUser/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addToListHandler = (enteredUser) => {
    setUserList(prevUserList => (
      new Array(...prevUserList, enteredUser)
    ));
  };

  return (
    <div className="App">
      <AddUser onAddUser={addToListHandler} />
      <UserList items={userList} />
    </div>
  );
}

export default App;
