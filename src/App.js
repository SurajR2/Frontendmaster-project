import { render } from "react-dom";
import SeachParams from "./SearchParams";
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SeachParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
