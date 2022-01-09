import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const [userList, setUserList] = useState([]);
  
  const addToListHandler = (enteredUser) =>
    setUserList((prevState) => {
      return { ...prevState, user };
    });

  if (userList.length > 0) {
    return (
      <Card>
        {userList.map((user) => (
          <div className={styles.user} key={Math.random()}>
            {user.name} ({user.age} years old)
          </div>
        ))}
      </Card>
    );
  } else {
    return <div></div>;
  }
};

export default UserList;
