import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './components/app.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./services/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
          <Provider store={store}>
              <App />
          </Provider>
      </Router>
  </StrictMode>,
)
