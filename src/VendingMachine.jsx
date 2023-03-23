import Snack from "./Snack";
import { BrowserRouter, Route } from "react-router-dom";
function VendingMachine({ snacks }) {
  return (
    <div>
      <h1>My ugly vending machine</h1>
      {snacks.map((val) => {
        return (
          <div>
            <a href={`/${val}`}>{val}</a>
          </div>
        );
      })}
    </div>
  );
}
export default VendingMachine;
