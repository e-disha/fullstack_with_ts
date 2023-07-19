import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import RootElement from './routes/RootElement'
import Home from './routes/Home'
import About from './routes/About'
import Create from './routes/Create'
import ErrorElement from './routes/ErrorElement'
import { Signin } from './authenticity/Signin'
import { Signup } from './authenticity/Signup'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={< RootElement />} errorElement={<ErrorElement />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='create' element={<Create />} />
      <Route path='signin' element={<Signin />} />
      <Route path='signup' element={<Signup />} />
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
