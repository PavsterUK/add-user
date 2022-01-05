import React from "react";
import Button from "./Button";
import styles from "./AddUserForm.module.css";

const AddUserForm = () => {
  return (
    <div>
      <form className={styles.form}>
        <label>Username</label>
        <br/>
        <input />
        <br/>
        <label>Age(Years)</label>
        <br/>
        <input />
        <Button type="submit" title="Add User" />
      </form>
    </div>
  );
};

export default AddUserForm;
