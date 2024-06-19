import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Envolver app con el contexto creado
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
