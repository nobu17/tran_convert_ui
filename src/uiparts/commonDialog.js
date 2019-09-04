import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class CommonDialog extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string,
    message: PropTypes.string,
    type: PropTypes.string,
    closed: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOKClose = this.handleOKClose.bind(this);
    this.handleCancelClose = this.handleCancelClose.bind(this);
  }
  handleOKClose() {
    this.handleClose(true);
  }
  handleCancelClose() {
    this.handleClose(false);
  }
  handleClose(result) {
    this.props.closed(result);
  }
  render() {
    return (
      <Dialog
        open={this.props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {this.props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {(() => {
            if (this.props.type === "ok") {
              return (
                <Button onClick={this.handleOKClose} color="primary" autoFocus>
                  OK
                </Button>
              );
            } else if (this.props.type === "ok_cancel") {
              return (
                <div>
                  <Button onClick={this.handleCancelClose} color="primary">
                    Cancel
                  </Button>
                  <Button
                    onClick={this.handleCancelClose}
                    color="primary"
                    autoFocus
                  >
                    OK
                  </Button>
                </div>
              );
            }
          })()}
        </DialogActions>
      </Dialog>
    );
  }
}
