import React, { Component } from 'react'

export default class CheckboxWithLabel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isChecked: false
        }
    }

    //simple checkbox which swaps between two labels: 
    onChange = () => {
        this.setState({ isChecked: !this.state.isChecked }); //toggle 
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        type='checkbox'
                        checked={this.state.isChecked}
                        onChange={this.onChange}
                    />
                    {this.state.isChecked ? this.props.labelOn : this.props.labelOff}

                </label>
            </div>
        )
    }
}
