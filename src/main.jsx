import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import toast, { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Toaster
       position="top-center"
       reverseOrder={false}
     />
  </>,
)
