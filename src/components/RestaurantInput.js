import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

    state = {
        name: '',
        location: ''
    }

    handleOnNameChange = event => {
        this.setState({
        name: event.target.value
        });
    }

    handleOnLocationChange = event => {
        this.setState({
        location: event.target.value
        });
    }

    // The argument (this.state) is "restaurantFromState" in the mapDispatchToProps function. 
    handleOnSubmit = event => {
        // debugger
        event.preventDefault();
        // add missing code
        this.props.addRestaurant(this.state);
    }

    render() {
        return(
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <p>
            <input
                type="text"
                onChange={(event) => this.handleOnNameChange(event)}
                id="name"
                placeholder="restaurant name" />
            </p>
            <p>
            <input
                type="text"
                onChange={(event) => this.handleOnLocationChange(event)}
                id="location"
                placeholder="location" />
            </p>
            <input type="submit" />
        </form>
        );
    }
};

// 2. Write mapDispatchToProps function.
// The function must be specific as to whether it will pass an argument and it needs to be named. 
// restaurantFromState refers to this.state in the handleSubmit function above.
const mapDispatchToProps = dispatch => {
    return {
        addRestaurant: (restaurantFromState) => {
            dispatch(addRestaurant(restaurantFromState))
        }
    }
}


//connect this component by wrapping RestaurantInput below.
// 3. Connect mapDispatchToProps to this component, RestaurantInput.
// The connect function "connects" functions to this same component.
// RestaurantInput is able to use props.addRestaurant as a dispatch call.
export default connect(null, mapDispatchToProps)(RestaurantInput);

