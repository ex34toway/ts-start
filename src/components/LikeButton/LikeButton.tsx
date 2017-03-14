import * as React from 'react';
import './LikeButton.less';

export interface LikeButtonProps { handleClick?: React.FormEventHandler<any>, text: string }

export class LikeButton extends React.Component<LikeButtonProps, any> {

  handleClick = (e: any) => {
    this.text == "Liked";
  }

  text = this.props.text;

  render() {
    return (
      <p onClick={this.handleClick}>
        你<b>{this.text}</b>我。点我切换状态。
      </p>
    );
  }
}

export default LikeButton;
