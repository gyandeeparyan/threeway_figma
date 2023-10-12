import Home from "./Pages/Home";
import "./App.css";
import Signin from './Pages/Signin';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from './Pages/Signup';

function App() {


  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children:[]
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
   
  ]);

  return (
    <>

      <RouterProvider router={appRouter}>

      </RouterProvider>
    </>
  );
}

export default App;
