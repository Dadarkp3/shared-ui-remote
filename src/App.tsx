import ReactDOM from "react-dom/client";

import "./index.css";
import Navbar from "./components/organisms/Navbar";

const App = () => <Navbar />;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
