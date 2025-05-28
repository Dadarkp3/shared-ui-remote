import ReactDOM from "react-dom/client";

import "./index.css";
import Counter from "./components/Counter";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: shared-ui-remote</div>
    <div>Framework: react-19</div>
    <Counter />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
