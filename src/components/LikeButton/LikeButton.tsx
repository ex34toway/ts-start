import * as React from 'react';
import { findDOMNode } from 'react-dom';
import './LikeButton.less';

export interface LikeButtonProps { handleClick?: React.FormEventHandler<any>, like: string,liked: string}

export class LikeButton extends React.Component<LikeButtonProps, any> {

  static propTypes = {
    handleClick: React.PropTypes.func,
    like: React.PropTypes.string,
    liked: React.PropTypes.string,
    initStatus: React.PropTypes.bool
  };

  handleClick = (e: any) => {
    //组件内部处理
    this.initStatus = this.initStatus ? false : true;
    const buttonNode = findDOMNode(this);
    this._p.textContent = this.initStatus ? this.props.liked : this.props.like;

    const onClick = this.props.handleClick;
    if (onClick) {
      onClick(e);
    }
  }

  _p :Element;
  initStatus : boolean;

  render() {
    return (
      <p onClick={this.handleClick}>
        你<b ref={p => { this._p = p}}>{this.props.like}</b>我。点我切换状态。
      </p>
    );
  }
}

export default LikeButton;
