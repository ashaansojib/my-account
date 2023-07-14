import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-screen-md mx-auto'>
<RouterProvider router={router} />
</div>
)
