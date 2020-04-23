import React from "react";
import { Card, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {
  getProducts,
  deleteProduct,
  updateProduct,
} from "../reducers/products"; // this would come from actions folder or something else, not reducers

class Products extends React.Component {
  // state = { products: [] };
  componentDidMount() {
    this.props.getProducts();
  }
  renderProducts = () => {
    // const { products } = this.state;
    const { products, isLoading, hasError, errorMessage } = this.props;
    if (isLoading) return <h2>Loading</h2>;
    if (hasError) return <h2>{errorMessage.message}</h2>;
    if (products.length <= 0) return <h2>No Products</h2>;

    return products.map((product) => (
      <Card key={product.id}>
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>{product.department}</Card.Meta>
          <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/products/${product.id}`} color="blue">
            View
          </Button>
          <Button onClick={() => this.props.delete(product.id)} color="red">
            Delete
          </Button>
          <Button onClick={() => this.props.update(product.id)} color="blue">
            Edit
          </Button>
        </Card.Content>
      </Card>
    ));
  };

  render() {
    return (
      <div>
        <Header as="h1">Products</Header>
        <br />
        <Button as={Link} color="blue" to="/products/new">
          Add Product
        </Button>
        <br />
        <br />
        <Card.Group>{this.renderProducts()}</Card.Group>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    isLoading: state.ui.loading,
    hasError: state.ui.error,
    errorMessage: state.ui.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    delete: (id) => dispatch(deleteProduct(id)),
    update: (id) => dispatch(updateProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
