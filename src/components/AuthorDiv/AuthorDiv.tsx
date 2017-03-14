import * as React from 'react';
import './AuthorDiv.less';

export interface AuthorDivProps { author: string, children: string }

export class AuthorDiv extends React.Component<AuthorDivProps, any> {

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default AuthorDiv;
