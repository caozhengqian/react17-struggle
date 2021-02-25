import React from 'react';
import "./index.less";
import { Button } from 'antd';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
        <div className="index">
          <Button type="primary">Button</Button>
        </div>
    );
  }
}
