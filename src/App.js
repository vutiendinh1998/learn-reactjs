import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10
      }
      const productList = await productApi.getAll(params)
      console.log(productList)
    }

    fetchProducts()
  },[])

  return (
    <div className="App">
      Header
      <p>
        <NavLink to= '/todos' activeClassName='active-menu'>Todos</NavLink>
      </p>    
      <p>
        <NavLink to= '/albums'>Albums</NavLink>
      </p>
    <Switch>
      <Redirect from fro='/home' tot='/' exact/>
      <Redirect from='/post-list/:postId' to='posts/:postId' exact/>

      <Route path='/' component={TodoFeature} exact/>
      <Route path='/todos' component={TodoFeature}/>
      <Route path='/albums' component={AlbumFeature}/>
      <Route component={NotFound} />
    </Switch>
      Footer
    </div>
  );
}

export default App;
