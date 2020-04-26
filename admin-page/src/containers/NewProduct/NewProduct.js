import React, {Component, Fragment} from 'react';
import ProductForm from "../../components/ProductForm/ProductForm";
import {createProduct, fetchCategories} from "../../store/actions/actions";
import {connect} from "react-redux";

class NewProduct extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <Fragment>
                <h1>Create new product</h1>
                <ProductForm
                    categories={this.props.categories}
                    submitForm={this.props.onProductCreated}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.allCategories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        onProductCreated: (product) => dispatch(createProduct(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
