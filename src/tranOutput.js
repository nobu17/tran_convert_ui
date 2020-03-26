import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import TranExpansion from './uiparts/tranExpansion';
import TranHeadExpansion from './uiparts/tranHeadExpansion';

class TranOutput extends React.Component {
  static propTypes = {
    tranObj: PropTypes.object,
    comparedTranObj: PropTypes.object
  };
  render() {
    return (
      <div>
        <Grid container spacing={1} justify='center'>
          {(() => {
            if (this.props.tranObj.TRAN_TBL) {
              return (
                <Grid item xs={11} style={{ margin: 10 }}>
                  <TranHeadExpansion
                    header={'TRAN_TBL'}
                    tranData={this.props.tranObj.TRAN_TBL}
                    comparedTranData={this.props.comparedTranObj.TRAN_TBL}
                  />
                </Grid>
              );
            }
          })()}
          {(() => {
            if (
              this.props.tranObj.ITEM_TBL &&
              this.props.tranObj.ITEM_TBL.ITEM_REC
            )
              return (
                <Grid item xs={11} style={{ margin: 10 }}>
                  <TranExpansion
                    header={'ITEM_TBL/ITEM_REC'}
                    tranData={this.props.tranObj.ITEM_TBL.ITEM_REC}
                    comparedTranData={
                      this.props.comparedTranObj.ITEM_TBL.ITEM_REC
                    }
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
                <Grid item xs={11} style={{ margin: 10 }}>
                  <TranExpansion
                    header={'POINT_TBL/POINT_REC'}
                    tranData={this.props.tranObj.POINT_TBL.POINT_REC}
                  />
                </Grid>
              );
          })()}
          {(() => {
            if (this.props.tranObj.MMTBL && this.props.tranObj.MMTBL.MM_REC)
              return (
                <Grid item xs={11} style={{ margin: 10 }}>
                  <TranExpansion
                    header={'MMTBL/MM_REC'}
                    tranData={this.props.tranObj.MMTBL.MM_REC}
                  />
                </Grid>
              );
          })()}
          {(() => {
            if (
              this.props.tranObj.MEDIA_TBL &&
              this.props.tranObj.MEDIA_TBL.MEDIA_REC
            )
              return (
                <Grid item xs={11} style={{ margin: 10 }}>
                  <TranExpansion
                    header={'MEDIA_TBL/MEDIA_REC'}
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
                <Grid item xs={11} style={{ margin: 10 }}>
                  <TranExpansion
                    header={'REDIT_TBL/CREDIT_REC'}
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
