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
          <button onClick={() => props.setIsInvalid(false)}> Ok </button>
        </div>
      </div>
    </div>
  );
};

export default OverlayWindow;
