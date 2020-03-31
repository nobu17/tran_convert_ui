import React from 'react';
import PropTypes from 'prop-types';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Paper from '@material-ui/core/Paper';

import TranDataTable from './tranDataTable';

export default class TranExpansion extends React.Component {
  static propTypes = {
    header: PropTypes.string,
    tranData: PropTypes.array,
    comparedTranData: PropTypes.array
  };
  constructor(props) {
    super(props);
    this.state = {
      style: {
        root: {
          width: '95%',
          overflowX: 'scroll'
        }
      }
    };
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
          <Paper style={this.state.style.root}>
            <TranDataTable tranData={this.props.tranData}></TranDataTable>
            <TranDataTable tranData={this.props.comparedTranData}></TranDataTable>
          </Paper>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
