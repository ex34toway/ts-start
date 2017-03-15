import { Button, Spin } from 'antd';
import * as React from 'react';
import * as _ from 'lodash';
import { PropTypes } from 'react';

interface MySelectProps {
  foo: string;
}

export class MySelect extends React.Component<MySelectProps, any> {

  render() {
    return (
      <span>
        {this.props.foo}
      </span>
    );
  }

}

export default MySelect
