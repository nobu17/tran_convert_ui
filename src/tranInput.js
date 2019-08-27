import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import Tranparser from "./util/tranparser";

import "./tranInput.css";

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
  testConvert() {
    const str =
      "<TRAN_TBL>AB,3,4,6,7,8,9</ TRAN_TBL><ITEM_TBL><ITEM_REC>aa</ ITEM_REC><ITEM_REC>bb</ ITEM_REC></ITEM_TBL>";
    console.log("object", Tranparser(str));
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <div class="textareacontainer">
              <TextareaAutosize
                rows={4}
                placeholder="input tran"
                value={this.state.rawTran}
                onChange={this.onRawTranChange}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.testConvert}
            >
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
