import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Snack from "./Snack";
function App() {
  const snacks = ["chips", "candy", "chocolate"];
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine snacks={snacks} />
        </Route>
        {snacks.map((val) => {
          return (
            <Route exact path={`/${val}`}>
              <Snack snack={val} />
            </Route>
          );
        })}
      </BrowserRouter>
    </div>
  );
}

export default App;
