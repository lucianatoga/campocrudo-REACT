import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Provider } from './components/ui/provider'
import { RouterProvider } from 'react-router'
import { router } from './routes'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <Provider>
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    </Provider>
  )
}

export default App
