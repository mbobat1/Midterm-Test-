import React from 'react'
import ReactDOM from 'react-dom/client'

import { AddProduct, SignUpUser }from './index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AddProduct />
   <SignUpUser/>
  </React.StrictMode>,
)
