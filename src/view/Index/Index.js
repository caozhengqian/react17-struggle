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
  _life(){
    this.props.history.push({pathname: '/life'})
  }
  render() {
    return (
        <div className="index">
          <Button onClick={() => this._life()} >生命周期</Button>
        </div>
    );
  }
}
