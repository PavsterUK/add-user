import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./Form.module.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const user = {
      name: name,
      age: +age,
    };

    props.onSubmit(user);
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label>Username</label>
      <br />
      <input
        type="text"
        placeholder="eg. John"
        onChange={nameChangeHandler}
        value={name}
      />
      <br />
      <label>Age(Years)</label>
      <br />
      <input
        type="number"
        placeholder="eg. 22"
        onChange={ageChangeHandler}
        value={age}
      />
      <Button type="submit" title="Add User" />
    </form>
  );
};

export default Form;
