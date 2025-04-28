import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Provider } from './components/ui/provider'

function App() {

  return (
    <Provider>
      <NavBar></NavBar>
      <ItemListContainer placeholder={'Bienvenidos a la tienda!'}></ItemListContainer>
    </Provider>
  )
}

export default App
