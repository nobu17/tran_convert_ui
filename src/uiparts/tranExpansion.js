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

export default class TranExpansion extends React.Component {
  static propTypes = {
    header: PropTypes.string,
    tranData: PropTypes.array
  };
  constructor(props) {
    super(props);
    this.state = {
      style: {
        root: {
          width: "95%",
          overflowX: "scroll"
        },
        table: {
          minWidth: 300
        }
      }
    };
  }
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
          <Paper style={this.state.style.root}>
            <Table size="small" style={this.state.style.table}>
              <TableHead>
                <TableRow>
                  {this.getMaxArray(this.props.tranData).map((tran, index) => (
                    <TableCell align="right">{index + 1}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.tranData.map((itemRec, index) => (
                  <TableRow key={index}>
                    {itemRec.map(rec => (
                      <TableCell align="right">{rec}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
