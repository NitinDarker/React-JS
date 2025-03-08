import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counters from './Counters.jsx'
import ShoppingList from './ShoppingList.jsx'
import StateUp from './StateUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2>Experiment - 1</h2>
    <App />
    <ShoppingList />
    <Counters />
    <StateUp />
  </StrictMode>,
)
