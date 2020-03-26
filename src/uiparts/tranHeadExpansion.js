import React from 'react';
import PropTypes from 'prop-types';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Paper from '@material-ui/core/Paper';

import TranDataTable from './tranDataTable';

export default class TranHeadExpansion extends React.Component {
  static propTypes = {
    header: PropTypes.string,
    tranData: PropTypes.array,
    comparedTranData: PropTypes.array
  };
  getMaxArray(array) {
    return array.reduce((a, b) => (a.lenght > b.lenght ? a : b));
  }
  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls='panel1a-content'
          expandIcon={<ExpandMoreIcon />}
        >
          {this.props.header}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Paper
            style={{
              width: '95%',
              overflowX: 'scroll'
            }}
          >
            <TranDataTable tranData={this.props.tranData}></TranDataTable>
            <TranDataTable
              tranData={this.props.comparedTranData}
            ></TranDataTable>
          </Paper>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
