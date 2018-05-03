import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Calculate from "./components/Calculate";


class App extends React.Component {
  state = {
    discount: undefined,
    importFee: undefined,
    totalCost: undefined,
    error: undefined
  }
  getCalculate = async (e) => {
    e.preventDefault();
    const quantity = e.target.elements.quantity.value;
    const nation = e.target.elements.nation.value;

      const cost = quantity*1000;

    if (quantity && nation) {


        if (nation === "india" || nation === "India" || nation === "INDIA") {
            this.setState({
                discount: ((cost * 10) / 100),
                importFee: ((cost * 5) / 100),
                totalCost: cost - (cost * 10) / 100 + (cost * 5) / 100,
                error: ""

            });

        }
        if (nation === "UK" || nation === "uk" || nation === "Uk") {
            this.setState({
                discount: ((cost * 7.5) / 100),
                importFee: ((cost * 3) / 100),
                totalCost: cost - ((cost * 7.5) / 100) + ((cost * 3) / 100),
                error: ""
            });
        }
        if (nation === "US" || nation === "us" || nation === "Us") {
            this.setState({
                discount: ((cost * 2) / 100),
                importFee: 0,
                totalCost: cost - ((cost * 2) / 100),
                error: ""
            });
        }
    }
        else {
            this.setState({

                discount: undefined,
                importFee: undefined,
                totalCost: undefined,
                error: "Please enter the values."
            });
        }
  }
  render() {
    return (
      <div>
        <div id = "space" className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getCalculate={this.getCalculate} />
                  <Calculate
                    discount ={this.state.discount}
                    importFee ={this.state.importFee}
                    totalCost ={this.state.totalCost}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
