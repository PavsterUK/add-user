import React from "react";
import Button from "./Button";
import styles from "./PopUpWindow.module.css";

const PopUpWindow = (props) => {
  return (
      <div className={styles.card}>
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
        <div className={styles.button}>
          <Button title="Okay" />
        </div>
        <div className={styles.opaque}></div>
      </div>
  );
};

export default PopUpWindow;
