import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Store from "./Utils/Store";
import MainContainer from "./Components/MainContainer";
import Watch from "./Components/Watch";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/Home",
        element: <MainContainer />,
      },

      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={Store}>
      <div className="bg-gray-50">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
