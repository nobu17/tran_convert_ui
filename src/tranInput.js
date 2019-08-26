import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

class TranInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawTran: "bbbbb",
      convertStr: ""
    };
    this.onRawTranChange = this.onRawTranChange.bind(this);
  }
  onRawTranChange(e) {
    this.setState({ rawTran: e.target.value });
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <TextareaAutosize
              rows={4}
              placeholder="input tran"
              value={this.state.rawTran}
              onChange={this.onRawTranChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              登録
            </Button>
          </Grid>
        </Grid>
        <table></table>
      </div>
    );
  }
}

export default TranInput;
