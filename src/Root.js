import React from 'react';
import TranInput from './tranInput';
import TranOutput from './tranOutput';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tranObj: {},
      comparedTranObj: {
        TRAN_TBL: [],
        ITEM_TBL: {
          ITEM_REC: []
        },
        POINT_TBL: {
          POINT_REC: []
        },
        MMTBL: {
          MM_REC: []
        },
        MEDIA_TBL: {
          MEDIA_REC: []
        },
        CREDIT_TBL: {
          CREDIT_REC: []
        }
      }
    };
    this.tranInputted = this.tranInputted.bind(this);
    this.comparedTranInputted = this.comparedTranInputted.bind(this);
  }
  render() {
    return (
      <div>
        <TranInput
          tranInputted={this.tranInputted}
          comparedTranInputted={this.comparedTranInputted}
        ></TranInput>
        {(() => {
          if (this.state.tranObj) {
            return (
              <TranOutput
                tranObj={this.state.tranObj}
                comparedTranObj={this.state.comparedTranObj}
              ></TranOutput>
            );
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
  comparedTranInputted(tranObj) {
    if (tranObj) {
      this.setState({ comparedTranObj: tranObj });
    }
  }
}

export default Root;
