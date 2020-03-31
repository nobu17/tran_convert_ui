import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CommonDialog from './uiparts/commonDialog';
import './tranInput.css';

import TranInputTextBox from './uiparts/tranInputTextBox';

class TranInput extends React.Component {
  static propTypes = {
    tranInputted: PropTypes.func,
    comparedTranInputted: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      dialogTitle: '',
      dialogMessage: ''
    };
    this.openDialog = this.openDialog.bind(this);
    this.dialogColosed = this.dialogColosed.bind(this);
  }
  openDialog(dialogTitle, dialogMessage) {
    this.setState({
      dialogOpen: true,
      dialogTitle: dialogTitle,
      dialogMessage: dialogMessage
    });
  }
  dialogColosed(res) {
    this.setState({ dialogOpen: false });
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} style={{ margin: 10 }}>
            <TranInputTextBox
              tranInputtedSuccess={tran => this.props.tranInputted(tran)}
              tranInputtedFail={msg => this.openDialog('エラー', msg)}
            ></TranInputTextBox>
          </Grid>
        </Grid>
        <Grid container>
          <Grid itemx xs={12}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                aria-controls='panel1a-content'
                expandIcon={<ExpandMoreIcon />}
              >
                比較用(先に比較元を入力しないと表示されません。)
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container>
                  <Grid item xs={12} style={{ margin: 10 }}>
                    <TranInputTextBox
                      tranInputtedSuccess={tran =>
                        this.props.comparedTranInputted(tran)
                      }
                      tranInputtedFail={msg => this.openDialog('エラー', msg)}
                    ></TranInputTextBox>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ margin: 10 }}>
            <p>※比較用を入力する事で2つのファイルを比較できます。</p>
            <p>※半角スペースは可視性のため、□で表示されます。</p>
          </Grid>
        </Grid>
        <CommonDialog
          open={this.state.dialogOpen}
          closed={this.dialogColosed}
          title={this.state.dialogTitle}
          message={this.state.dialogMessage}
          type={'ok'}
        />
      </div>
    );
  }
}

export default TranInput;
