import React from "react";
import TranInput from "./tranInput";
import TranOutput from "./tranOutput";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tranObj: {}
    };
    this.tranInputted = this.tranInputted.bind(this);
  }
  render() {
    return (
      <div>
        <TranInput tranInputted={this.tranInputted}></TranInput>
        {(() => {
          if (this.state.tranObj) {
            return <TranOutput tranObj={this.state.tranObj}></TranOutput>;
          }
        })()}
      </div>
    );
  }
  tranInputted(tranObj) {
    if (tranObj) {
      this.setState({ tranObj: tranObj });
    }
  }
}

export default Root;
