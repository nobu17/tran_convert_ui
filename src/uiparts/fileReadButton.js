import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Encoding from "encoding-japanese";

const MaxSize = 2000000;

export default class FileReadButton extends React.Component {
  static propTypes = {
    buttonText: PropTypes.string,
    fileRead: PropTypes.func,
    fileReadFailed: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.clicked = this.clicked.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  clicked(e) {
    this.inputRef.current.click();
  }
  onChange(e) {
    const input = e.target;
    if (input.files[0]) {
      // サイズチェック
      if (input.files[0].size > MaxSize) {
        this.props.fileReadFailed(new Error("ファイルサイズが大きすぎます。"));
        return;
      }
      const reader = new FileReader();
      const props = this.props;
      reader.onload = function() {
        // const text = reader.result;
        // 8ビット符号なし整数値配列と見なす
        let array = new Uint8Array(reader.result);
        // 文字コードを取得
        switch (Encoding.detect(array)) {
          case "UTF16":
            // 16ビット符号なし整数値配列と見なす
            array = new Uint16Array(e.target.result);
            break;
          case "UTF32":
            // 32ビット符号なし整数値配列と見なす
            array = new Uint32Array(e.target.result);
            break;
        }

        // Unicodeの数値配列に変換
        const unicodeArray = Encoding.convert(array, "UNICODE");
        // Unicodeの数値配列を文字列に変換
        const text = Encoding.codeToString(unicodeArray);
        props.fileRead(text);
      };
      reader.onerror = function(err) {
        props.fileReadFailed(err);
      };
      reader.readAsArrayBuffer(input.files[0]);
    }
  }
  render() {
    return (
      <div>
        <input
          style={{ display: "none" }}
          ref={this.inputRef}
          type="file"
          accept="txt"
          onChange={this.onChange}
        />
        <Button variant="contained" color="primary" onClick={this.clicked}>
          {this.props.buttonText}
        </Button>
      </div>
    );
  }
}
