import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import MainArea from './components/MainArea/MainArea';
import CountryDetails from './components/CountryDetails/CountryDetails';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<MainArea/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'/country/:countryname',
        element:<CountryDetails/>
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
