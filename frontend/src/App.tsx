import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import RootElement from './routes/RootElement'
import Home from './routes/Home'
import About from './routes/About'
import Create from './routes/Create'
import ErrorElement from './routes/ErrorElement'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={< RootElement />} errorElement={<ErrorElement />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='create' element={<Create />} />
    </Route>
  )
)

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
