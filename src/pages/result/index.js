import React from 'react';

import cartModel from '~s/cart.js';
import orderModel from '~s/order.js';
import {observer, inject} from 'mobx-react';
import { urlBuilder } from '~/routes';
import { Link } from 'react-router-dom';

@inject('stores') @observer class Result extends React.Component{
    render(){
        let orderModel = this.props.stores.order;
        let cartModel = this.props.stores.cart;

        return (
            <div>
                <h2>Congratulations!</h2>
                <p>Hi, {orderModel.lastForm.name}!</p>
         
            
               
            </div>
        )
    }
}
export default Result;