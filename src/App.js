import './App.css';
import { Provider } from 'react-redux';
import Store from './component/Store';
import {Switch, Route, Redirect} from "react-router-dom";
import ProductDetails from './component/ProductDetails';
import Navbar from './shared/Navbar';
import ShopCart from './component/ShopCart';


import store from './redux/store';




function App() {
  return (
    <div className="App">
      
   <Provider store={store}>
            <Navbar/>
                      <Switch>
                        <Route path="/products/:id" component={ProductDetails}/>
                        <Route path="/products" component={Store}/>
                        <Route path="/Cart" component={ShopCart} />
                        <Redirect to="/products"/>
                      </Switch>
   </Provider>
    </div>
  );
}

export default App;
