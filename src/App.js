import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Store from "./Utils/Store";
function App() {
  return (
    <Provider store={Store}>
      <div className="bg-gray-50">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
