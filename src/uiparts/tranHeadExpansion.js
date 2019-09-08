import React from "react";
import PropTypes from "prop-types";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Paper from "@material-ui/core/Paper";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default class TranHeadExpansion extends React.Component {
  static propTypes = {
    header: PropTypes.string,
    tranData: PropTypes.array
  };
  getMaxArray(array) {
    return array.reduce((a, b) => (a.lenght > b.lenght ? a : b));
  }
  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls="panel1a-content"
          expandIcon={<ExpandMoreIcon />}
        >
          {this.props.header}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Paper
            style={{
              width: "95%",
              overflowX: "scroll"
            }}
          >
            <Table size="small" style={{ minWidth: 300 }}>
              <TableHead>
                <TableRow>
                  {this.props.tranData.map((tran, index) => (
                    <TableCell align="right">{index + 1}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={1}>
                  {this.props.tranData.map(tran => (
                    <TableCell align="right">{tran}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
