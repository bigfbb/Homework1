import React from "react";

class ShowDiv extends React.Component {
    budget = localStorage.getItem("deposit")
    withdrawn = 0
    balance = 0
    render() {
        return (
            <div className="showDiv">

                <div>
                    <p></p>
                    <h2></h2>
                </div>

                <h1>Budget: {this.budget}</h1>

                <h1>withdraw: {this.withdrawn}</h1>

                <h1>balance: {this.balance}</h1>

            </div>

        )
    }
}



export default ShowDiv;