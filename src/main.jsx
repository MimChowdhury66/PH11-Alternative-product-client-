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
import Queries from './pages/Queries/Queries';
import Update from './pages/Update/Update';
import QueryDetails from './pages/QueryDetails/QueryDetails';
import MyRecommendation from './pages/MyRecommendation/MyRecommendation';
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
        element: <PrivateRoute><AddQuery></AddQuery></PrivateRoute>
      },
      {
        path: '/queries',
        element: <PrivateRoute><Queries></Queries></PrivateRoute>
      },
      {
        path: '/updateQuery/:id',
        element: <Update></Update>
      },
      {
        path: '/queryDetails/:id',
        element: <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>
      },
      {
        path: '/myRecommendations',
        element: <PrivateRoute><MyRecommendation></MyRecommendation></PrivateRoute>
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
