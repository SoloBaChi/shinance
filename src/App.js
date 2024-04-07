import Header from "./ecommerce/common/header/Header";
import "./App.css"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Pages from "./ecommerce/pages/Pages";
import Data from "./ecommerce/components/flashDeals/Data";
import { useState } from "react";
function App() {

  //Step 1: fetch data from the database
  const { productItems } = Data;

  const [cartItem,setCartItem] = useState([])
  //Step 2:

  return (
    <>
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exaxt>
          <Pages productItems ={productItems}/>
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
