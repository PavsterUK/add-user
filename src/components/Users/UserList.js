import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  let users = props.items;

  if (users.length > 0) {
    return (
      <Card>
        {users.map((user) => (
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
