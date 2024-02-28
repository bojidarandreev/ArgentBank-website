import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import './index.scss'
import Home from './pages/Home/Home.jsx';
import User from './pages/User/User.jsx';
import Login from './pages/Login/Login.jsx';
import NotFound from './pages/NotFound/Notfound.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/user",
        element: <User />
      },
      {
        path: "/*",
        element: <NotFound />,
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
