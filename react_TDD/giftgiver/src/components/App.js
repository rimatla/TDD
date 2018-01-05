import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift'

class App extends Component {
    constructor() {
        super();
        this.state = { gifts: []};
    }
    //automatically transfer 'this' object FROM the component to addGift()
    addGift = () => {
        //destructuring
        const { gifts } = this.state; //local copy of gifts array
        const ids = this.state.gifts.map(gift => gift.id);
        const max_id = ids.length > 0 ? Math.max(...ids) : 0; //spreadOperator how many ever ids there are
        gifts.push({id: max_id+1}); //find max id w/ the latest gift

        //destructuring
        this.setState({ gifts });
    };

    //remove a gift
    removeGift = id => {
        //filter gifts
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({gifts});
    };

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">
                    {
                        this.state.gifts.map(gift => {
                            return (
                                <Gift
                                    key={gift.id}
                                    gift={gift}
                                    removeGift={this.removeGift}
                                />
                            )
                        })
                    }
                </div>
                <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App;