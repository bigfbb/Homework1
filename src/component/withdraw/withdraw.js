import React from "react";

class Withdraw extends React.Component {

    expenseNameTaker = (e) => {
       
        this.expenseName = e.target.value
    }

    withdrawTaker = (e) => {
        this.withdrawInput = +e.target.value
    }

    withdrawSubmit = () => {
        const obj = JSON.parse(localStorage.getItem("myState"));
        const balanceObj = obj.balance;
        const namesObj = obj.arr;
        if (this.withdrawInput > balanceObj) {
            alert("you cant spend more than you have ")
            return;
        }
        if (!namesObj.some( x => x.name === this.expenseName)  ) {
            this.props.setWithdraw(this.withdrawInput, this.expenseName)
            return;
        }else{
            alert("already here")

        }

    }

    render() {
        return (
            <div className="wDiv">
                <input type="text" placeholder="product name" onChange={this.expenseNameTaker}></input>
                <input type="number" placeholder="how much" onChange={this.withdrawTaker}></input>
                <button onClick={this.withdrawSubmit}>withdraw</button>
            </div>

        )
    }
}

export default Withdraw