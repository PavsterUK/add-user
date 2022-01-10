import Card from "../UI/Card";
import Form from "./Form";


const AddUser = (props) => {
  
  const onSubmitForm = (user) => {
    props.onAddUser(user);
  }
  
  return (
    <Card>
      <Form onSubmit={onSubmitForm}/>
    </Card>
  );
};

export default AddUser;
