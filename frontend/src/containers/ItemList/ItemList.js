
import React, { Component } from 'react';
import Item from '../../components/Item/Item.js';

let uniqid = require('uniqid');

class ItemList extends Component {
    state = {
        AWS_LAMBDA_URL: this.props.URL,
        list: []
    };


    get_List(URL) {
        return fetch(URL);
    }
    componentDidMount() {
        this.get_List(this.state.AWS_LAMBDA_URL + "users/restaurants/get")
            .then((response) => response.json())
            .then((restaurants) => this.setState({ list: restaurants.restaurant_list }));
    }

    render(){
        let items = this.state.list.map(item => (
            <Item
                key={uniqid()}
                name={item.name}
                food={item.food}
                tags={item.tags}
            />
            
        ))
        console.log(items);    
        return (
            <div>
                {items}
            </div>
            
        );
    }
}
export default ItemList;