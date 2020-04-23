import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";
import Navbar from './components/NavBar';
import Products from './components/Products';
import ProductsForm from './components/ProductsForm'
import ProductReview from './components/ProductView';


const App = () => (
  <Fragment>
     <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/new" component={ProductsForm} />
        <Route exact path="/products/:id" component={ProductReview} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;