import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./Form.module.css";
import OverlayWindow from "../UI/OverlayWindow"

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [errors, setErrors] = useState("");


  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let error = validate();
    if (error !== "") {
      setIsInvalid(true);
      setErrors(error);
      return
    }

    const user = {
      name: name,
      age: +age,
    };

    props.onSubmit(user);
    setName("");
    setAge("");
  };

  const validate = () => {
    if (+age < 0) {
      return "Age should be more than 0"
    } else if (age.trim().length === 0 || name.trim().length === 0) {
      return "Age or Name must not be blank"
    } else {
      return "" //No error
    }
    
  }
  
  return (
    <div>
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

      {isInvalid && <OverlayWindow paragraph={errors} setIsInvalid={setIsInvalid}/>}
      
    </div>
  );
};

export default Form;
