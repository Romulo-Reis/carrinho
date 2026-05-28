import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './App'
import { RouterProvider } from 'react-router'
import './index.css'

import CartProviter from './contexts/CartContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProviter>
      <RouterProvider router={router}/>
    </CartProviter>
  </StrictMode>,
)
