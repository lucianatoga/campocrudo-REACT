import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Provider } from './components/ui/provider'
import { RouterProvider } from 'react-router'
import { router } from './routes'

function App() {

  return (
    <Provider>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
