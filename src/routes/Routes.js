import React from "react";
import { Route, Switch } from "react-router-dom";

import Cabinet from "../layouts/Cabinet/Cabinet";
import Products from "../pages/Products/Products";
import Customers from "../pages/Customers/Customers";
import Orders from "../pages/Orders/Orders";
import News from "../pages/News/News";
import TabItem from '../components/TabItem/TabItem';

/*
 * думаю тут комментировать особо нечего...
 * использовал компонент с возможностью прокинуть в них чилдренов, 
 * для того, чтобы можно было добавить в будущем еще разного контатента в эти страницы
 * Products, Customers...
 */

const Routes = () => (
  <Cabinet>
    <Switch>
      <Route path="/products">
        <Products>
          {/* 
          TabItem - этот компонент везде переиспользовал, 
          чтобы не плодить много одинаковых компонентов
          */}
          <Route path="/products/:tabId" component={TabItem}/>
        </Products>
      </Route>

      <Route path="/customers">
        <Customers>
          <Route path="/customers/:tabId" component={TabItem}/>
        </Customers>
      </Route>

      <Route path="/orders">
        <Orders>
          <Route path="/orders/:tabId" component={TabItem}/>
        </Orders>
      </Route>

      <Route path="/news">
        <News>
          <Route path="/news/:tabId" component={TabItem}/>
        </News>
      </Route>
    </Switch>
  </Cabinet>
);

export default Routes;
