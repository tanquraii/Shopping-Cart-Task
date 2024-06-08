import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'
import Payment from './Payment.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"shop/",
    element:<Shop/>,

  },
  {
    path:"cart/shop/",
    element:<Shop/>,

  },
  {
    path:"cart/",
    element:<Cart/>,
  },
  {
    path:"shop/cart/",
    element:<Cart/>,
  },
  {
    path:"shop/payment",
    element:<Payment/>,
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
