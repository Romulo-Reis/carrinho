import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './App'
import { RouterProvider } from 'react-router'
import './index.css'

import CartProviter from './contexts/CartContext';
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProviter>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={router}/>
    </CartProviter>
  </StrictMode>,
)
