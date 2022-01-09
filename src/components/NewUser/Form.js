import Button from "../UI/Button";
import styles from "./Form.module.css";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <label>Username</label>
        <br />
        <input />
        <br />
        <label>Age(Years)</label>
        <br />
        <input />
        <Button type="submit" title="Add User" />
      </form>
  )
}

export default Form
