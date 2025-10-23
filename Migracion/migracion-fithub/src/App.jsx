import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'

function App() {
  

  return (
    <div>
      <RouterProvider router={createBrowserRouter(AppRouter)} />
    </div>
  )
}

export default App
