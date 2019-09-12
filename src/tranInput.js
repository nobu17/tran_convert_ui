import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import Tranparser from "./util/tranparser";

import FileReadButton from "./uiparts/fileReadButton";
import CommonDialog from "./uiparts/commonDialog";
import "./tranInput.css";

class TranInput extends React.Component {
  static propTypes = {
    tranInputted: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      trimTran: false,
      rawTran: "",
      convertStr: "",
      placeholder:
        "<TRAN_TBL>*,*,*,…</TRAN_TBL>\n<ITEM_TBL><ITEM＿REC>*,*,…<ITEM_REC><ITEM_TBL>\n……\n",
      dialogOpen: false,
      dialogTitle: "",
      dialogMessage: ""
    };
    this.onRawTranChange = this.onRawTranChange.bind(this);
    this.tranConvert = this.tranConvert.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.dialogColosed = this.dialogColosed.bind(this);
    this.checkTrimChanged = this.checkTrimChanged.bind(this);
    this.fileRead = this.fileRead.bind(this);
    this.fileReadFailed = this.fileReadFailed.bind(this);
  }
  checkTrimChanged(e) {
    if (e) {
      this.setState({ trimTran: e.target.checked });
    }
  }
  onRawTranChange(e) {
    this.setState({ rawTran: e.target.value });
  }
  fileRead(str) {
    this.setState({ rawTran: str });
  }
  fileReadFailed(err) {
    this.openDialog(
      "Error",
      "ファイルの読み込みに失敗しました。" + err.message
    );
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
  tranConvert() {
    try {
      if (!this.state.rawTran || this.state.rawTran.trim() === "") {
        throw new Error("入力欄に入力がされていません。");
      }
      //const str =
      //  "<TRAN_TBL>AB,3,4,6,7,8,9</ TRAN_TBL><ITEM_TBL><ITEM_REC>aa</ ITEM_REC><ITEM_REC>bb</ ITEM_REC></ITEM_TBL>";
      const tranObj = Tranparser.parseTran(this.state.rawTran);
      console.log("tranObj", tranObj);
      if (tranObj.TRAN_TBL) {
        this.props.tranInputted(Tranparser.parseTran(this.state.rawTran));
      } else {
        throw new Error("変換に失敗しました。入力フォーマットが不正です。");
      }
    } catch (err) {
      this.openDialog("エラー", err.message);
    }
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} style={{ margin: 10 }}>
            <FileReadButton
              buttonText={"ファイル読込"}
              fileRead={this.fileRead}
              fileReadFailed={this.fileReadFailed}
            />
          </Grid>
          <Grid item xs={12}>
            <div className="textareacontainer">
              <TextareaAutosize
                rowsMax={7}
                placeholder={this.state.placeholder}
                value={this.state.rawTran}
                onChange={this.onRawTranChange}
              />
            </div>
          </Grid>
          <Grid item xs={12} style={{ margin: 10 }}>
            <ButtonGroup aria-label="full width outlined button group">
              <Button
                variant="contained"
                color="primary"
                onClick={this.tranConvert}
              >
                変換
              </Button>
            </ButtonGroup>
            <p>※半角スペースは可視性のため、□で表示されます。</p>
          </Grid>
        </Grid>
        <CommonDialog
          open={this.state.dialogOpen}
          closed={this.dialogColosed}
          title={this.state.dialogTitle}
          message={this.state.dialogMessage}
          type={"ok"}
        />
      </div>
    );
  }
}

export default TranInput;
