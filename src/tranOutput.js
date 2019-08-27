import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import Xml2Js from "xml-js";

class TranOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawTran: "tttttt",
      convertStr: "",
      tranObj: {
        TRAN_TBL: {},
        ITEM_TBL: {}
      }
    };
    this.onRawTranChange = this.onRawTranChange.bind(this);
  }
  onRawTranChange(e) {
    this.setState({ rawTran: e.target.value });
  }
  testConvert() {
    const str =
      "<TRAN_TBL>*,*,*,・・・・</TRAN_TBL><ITEM_TBL><ITEM_REC>*,*,*,・・・・</ITEM_REC><ITEM_REC>*,*,*,・・・・</ITEM_REC></ITEM_TBL>";
    alert("st");
    const res = Xml2Js.xml2json(str, { compact: true, spaces: 4 });
    alert(res);
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

export default TranOutput;
