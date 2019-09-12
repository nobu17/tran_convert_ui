import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

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
        const text = reader.result;
        props.fileRead(text);
      };
      reader.onerror = function(err) {
        props.fileReadFailed(err);
      };
      reader.readAsText(input.files[0]);
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
