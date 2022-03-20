import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserDropdown from "../src/components/UserDropdown";
import FoodDropdown from "../src/components/FoodDropdown";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <UserDropdown />
      <FoodDropdown />
    </div>
  );
}

export default App;
