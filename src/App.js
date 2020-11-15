import logo from './logo.svg';
import './App.css';

import { Button, Switch } from "./zuz";

function App() {
  return (
    <div className="App abs abc">
      <Switch onChange={checked => console.log(checked)} checked={true} ui="ios" /><br /><br />
      <Switch onChange={checked => console.log(checked)} checked={true} ui="android" />
      {/*<Button label="Click me" onClick={evt=>console.log("I have been clicked")} />
      <Button label="Email Sent" type="ok" icon="icon-check" onClick={evt=>console.log("I have been clicked")} />
      <Button label="Error" type="error" icon="icon-cross" onClick={evt=>console.log("I have been clicked")} />*/}
    </div>
  );
}

export default App;
