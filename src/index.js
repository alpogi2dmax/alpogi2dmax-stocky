import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SellShoes from './SellShoes';
import AddToCart from './AddToCart';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Feature from './Feature'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sellshoes',
        element: <SellShoes />
      },
      {
        path: '/addtocart/:id',
        element: <AddToCart />
      },
      {
        path: '/feature',
        element: <Feature />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
