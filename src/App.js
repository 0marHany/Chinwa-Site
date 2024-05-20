import './App.css';
import Dishes from './components/Dishes/Dishes';
import Home from './components/Home/Home';
import LayOut from './components/LayOut/LayOut';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
function App() {
  const router = createBrowserRouter([{
    path: '/', element: <LayOut />, children: [
      { index: true, element: <Home /> },
      {path:"/dishes/:categories" , element:<Dishes/>}
    ]
  }])
  return (<>
    <RouterProvider router={router}/>

  </>
  );
}

export default App;
