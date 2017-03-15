import * as React from 'react';
import { Moo } from '../Moo';
import { LikeButton } from "../LikeButton";
import { AuthorDiv } from "../AuthorDiv";
import './App.less';

export class App extends React.Component<undefined, undefined> {
  onLikeButtonCliked = function (e: any) {
  }
  render() {
    return (
      <div className="root_container">
        <Moo name="Foo" />
        <LikeButton like="Like" handleClick={this.onLikeButtonCliked} liked="Liked"/>
        <AuthorDiv author="Liliang" children="Think Frontend in React.js" />
      </div>
    );
  }
}

export default App;
