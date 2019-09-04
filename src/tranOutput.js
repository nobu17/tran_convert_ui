import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import TranExpansion from "./uiparts/tranExpansion";
import TranHeadExpansion from "./uiparts/tranHeadExpansion";

class TranOutput extends React.Component {
  static propTypes = {
    tranObj: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      tranObj: {
        TRAN_TBL: ["a", "b", "caaa", "bbbb", "aaaa"],
        ITEM_TBL: {
          ITEM_REC: [
            ["111", "2222"],
            [
              "333",
              "4444",
              "5555",
              "aaaaaaaaa",
              "bbbbbbbbbbbb",
              "aaaaaa",
              "aaaa",
              "xxxxxxxxx",
              "aaaaaa",
              "aaaaaaaaaa",
              "aaaa",
              "bbbbbb",
              "cccccccc",
              "aaaaaaa",
              "aaaa",
              "xxxxxxxxx",
              "aaaaaa",
              "aaaaaaaaaa",
              "aaaa",
              "bbbbbb",
              "cccccccc",
              "aaaaaaa"
            ]
          ]
        }
      }
    };
  }
  render() {
    return (
      <div>
        <Grid container spacing={1} justify="center">
          {(() => {
            if (this.props.tranObj.TRAN_TBL)
              return (
                <Grid item xs={8} style={{ margin: 10 }}>
                  <TranHeadExpansion tranData={this.state.tranObj.TRAN_TBL} />
                </Grid>
              );
          })()}
          {(() => {
            if (
              this.props.tranObj.ITEM_TBL &&
              this.props.tranObj.ITEM_TBL.ITEM_REC
            )
              return (
                <Grid item xs={8} style={{ margin: 10 }}>
                  <TranExpansion
                    tranData={this.props.tranObj.ITEM_TBL.ITEM_REC}
                  />
                </Grid>
              );
          })()}
          {(() => {
            if (
              this.props.tranObj.POINT_TBL &&
              this.props.tranObj.POINT_TBL.POINT_REC
            )
              return (
                <Grid item xs={12} style={{ margin: 10 }}>
                  <TranExpansion
                    tranData={this.props.tranObj.POINT_TBL.POINT_REC}
                  />
                </Grid>
              );
          })()}
          {(() => {
            if (this.props.tranObj.MMTBL && this.props.tranObj.MMTBL.MM_REC)
              return (
                <Grid item xs={12} style={{ margin: 10 }}>
                  <TranExpansion tranData={this.props.tranObj.MMTBL.MM_REC} />
                </Grid>
              );
          })()}
          {(() => {
            if (
              this.props.tranObj.MEDIA_TBL &&
              this.props.tranObj.MEDIA_TBL.MEDIA_REC
            )
              return (
                <Grid item xs={12} style={{ margin: 10 }}>
                  <TranExpansion
                    tranData={this.props.tranObj.MEDIA_TBL.MEDIA_REC}
                  />
                </Grid>
              );
          })()}
          {(() => {
            if (
              this.props.tranObj.CREDIT_TBL &&
              this.props.tranObj.CREDIT_TBL.CREDIT_REC
            )
              return (
                <Grid item xs={12} style={{ margin: 10 }}>
                  <TranExpansion
                    tranData={this.props.tranObj.CREDIT_TBL.CREDIT_REC}
                  />
                </Grid>
              );
          })()}
        </Grid>
      </div>
    );
  }
}

export default TranOutput;
