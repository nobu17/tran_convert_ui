import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import { convert } from 'encoding-japanese';

export default class TranTable extends React.Component {
  static propTypes = {
    tranData: PropTypes.array
  };
  constructor(props) {
    super(props);
    this.state = {
      style: {
        table: {
          minWidth: 300
        }
      }
    };
  }
  getMaxLengthArray(array) {
    if (!array) {
      return [];
    }
    if (this.isOver2DArray(array)) {
      const max = array.reduce((a, b) => (a.lenght > b.lenght ? a : b));
      return max;
    } else {
      return array;
    }
  }
  getArrayTranData(tranData) {
    if (!tranData) {
      return [];
    }
    if (this.isOver2DArray(tranData)) {
      return tranData;
    }
    return [tranData];
  }
  isOver2DArray(array) {
    if (array.length > 1) {
      if (Object.prototype.toString.call(array[0]) === '[object Array]') {
        return true;
      }
    }
    return false;
  }
  render() {
    return (
      <Table size='small' style={this.state.style.table}>
        <TableHead>
          <TableRow key={1}>
            {this.getMaxLengthArray(this.props.tranData).map((tran, index) => (
              <TableCell align='right'>{index + 1}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {this.getArrayTranData(this.props.tranData).map((itemRec, index) => (
            <TableRow key={index}>
              {itemRec.map(rec => (
                <TableCell align='right'>{rec}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}
