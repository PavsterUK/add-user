import Card from "./components/Card";
import AddUserForm from "./components/AddUserForm";
import PopUpWindow from "./components/PopUpWindow";

function App() {
  return (
    <div className="App">
      <Card>
        <AddUserForm/>
        
      </Card>
      <PopUpWindow title="Invalid" paragraph="lorem ipsum"/>
    </div>
  );
}

export default App;
