import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './component/layout/Layout.jsx'
import Home from './component/home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import Cart from './component/cart/Cart.jsx'
import SignIn from './component/signIn/SignIn.jsx'
import SignUp from './component/signUp/SignUp.jsx'
import WishList from './component/wishList/WishList.jsx'


export default function App() {

  let Routes = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:'cart',element:<Cart/>},
      {path:'wishlist',element:<WishList/>},
      {path:'signin',element:<SignIn/>},
      {path:'signup',element:<SignUp/>},

  ]}
  ])

  return<>
  <RouterProvider router={Routes}/>
  </>
}
