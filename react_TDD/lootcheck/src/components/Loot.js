import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBitcoin} from '../actions/bitcoin';

export class Loot extends Component { //export the bear component
    componentDidMount() {
        console.log(this.props);
        this.props.fetchBitcoin();
    }

    computeBitcoin() {
        const {bitcoin} = this.props;

        if (Object.keys(bitcoin).length === 0) return '';
        //replace comas show only first two decimals
        const bitcoinAmount = parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
        return this.props.balance / bitcoinAmount;
    }

    render() {
        return (
            <h3>Bitcoin Balance: {this.computeBitcoin()}</h3>
        )
    }
}

export default connect(state => state, {fetchBitcoin})(Loot);