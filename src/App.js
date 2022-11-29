import React, { Fragment } from "react";
import Deposit from "./component/deposit/deposit";
import Withdraw from "./component/withdraw/withdraw";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: 0,
      withdrawn: 0,
      balance: 0,
      arr: []
    }
  }
  setDeposit = (number) => {
    this.setState({
      budget: this.state.budget + number,
      balance: this.state.balance + number
    })
  }

  setWithdraw = (number, name) => {
    const obj = {
      name: name,
      number: number
    }
    this.setState({
      withdrawn: this.state.withdrawn + number,
      balance: this.state.balance - number,
      arr: [...this.state.arr, obj]
    })

  }

  componentDidMount() {
    if (localStorage.getItem("myState")) {
      this.setState(JSON.parse(localStorage.getItem("myState")))
    }
  }

  componentDidUpdate() {
    localStorage.setItem("myState", JSON.stringify(this.state))
  }



  render() {
    return (
      <Fragment>
        <div><h4 id="h44">Money Saver</h4></div>

        <Deposit setDeposit={this.setDeposit}></Deposit>
        <div className="showDiv">

          <h1>Budget: {this.state.budget}</h1>

          <h1>withdrawn: {this.state.withdrawn}</h1>

          <h1>balance: {this.state.balance}</h1>

          <Withdraw setWithdraw={this.setWithdraw} setName={this.setName} />
          {this.state.arr.map((value,index) => {
            // console.log(this.state.balance)
            // console.log(value.name)

            return(
          
              <h1  key={index}>{value.name}: {value.number}</h1>
              )
          })}
        </div>
      </Fragment>
    )

  }

}