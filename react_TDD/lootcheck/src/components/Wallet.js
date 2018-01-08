import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw }  from '../actions/balance';

//export individually
export class Wallet extends Component {
  // constructor() {
  //     super();
  //     this.state = { balance: undefined};
  // }
  updateBalance = e => {
      return this.setState({balance: parseInt(e.target.value, 10)})
  };

  deposit = () => {
    return this.props.deposit(this.state.balance);
  };

  withdraw = () => {
      return this.props.withdraw(this.state.balance)
  };


  render() {
      return (
          <div>
              <h2 className="balance">Wallet balance: {(this.props.balance)}</h2>
              <br />
              <input className='input-wallet' onChange={this.updateBalance} />
              <button className="btn-deposit" onClick={this.deposit}>Deposit</button>
              <button className="btn-withdraw" onClick={this.withdraw}>Withdraw</button>
          </div>
      )
  }
}

//connect component to redux store
export default connect(state =>{return {balance: state}}, {deposit, withdraw})(Wallet);
