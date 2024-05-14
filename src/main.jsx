import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Root from './layout/Root';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import MyQueries from './pages/MyQueries/MyQueries';
import AddQuery from './pages/AddQuery/AddQuery';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/myQueries',
        element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
      },
      {
        path: '/addQuery',
        element: <AddQuery></AddQuery>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>

    <ToastContainer />
  </React.StrictMode>,
)
