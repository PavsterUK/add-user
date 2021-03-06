import React from "react";
import Button from "./Button";
import styles from "./OverlayWindow.module.css";

const OverlayWindow = (props) => {
  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h3>Invalid input</h3>
        <p>{props.paragraph}</p>
        <div className={styles.button}>
          <Button title={"Okay"} setIsInvalid={props.setIsInvalid}></Button>
        </div>
      </div>
    </div>
  );
};

export default OverlayWindow;
