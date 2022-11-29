import React from "react";


class Deposit extends React.Component {
    inputTaker = (e) => {
        this.depositInput = +e.target.value
    }
    depositSubmit = () => {
        this.props.setDeposit(this.depositInput)
    }
    render() {
        return (
            <div className="dDiv">
                <input placeholder=" money in " type="number" onChange={this.inputTaker}></input>
                <button onClick={(this.depositSubmit)}>Deposit</button>
            </div>
        )
    }
}



export default Deposit;