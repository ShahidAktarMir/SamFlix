import { Provider } from "react-redux";
import "./App.css";
import Store from "./Utils/Store";
import Header from "./Components/Header";
import Body from "./Components/Body";
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
